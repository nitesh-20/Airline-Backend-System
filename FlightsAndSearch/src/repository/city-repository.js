const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        }
        catch (error) {
            console.error('Error creating city :', error);
            throw { error };
        }
    }
    async deleteCity(cityID) {
        try {
            await City.destroy({
                where:
                {
                    id: cityID
                }
            })
        }
        catch (error) {
            console.error('Error deleting city :', error);
            throw { error };
        }
    }

    async updateCity(cityID, data) {
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id: cityID
            //     }
            // })

            // ***
            
            // The below approch also works but will not return updated object
            // if we are using pg then returning true can be used, else not.
            // const City = await city.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });
            // for getting updated data in mysql we use the below approach.
            const city = await City.findByPk(cityID);
            city.name = data.name;
            await city.save(); 
            return city;
        }
        catch (error) {
            console.log("Something went wrong", error);
            throw { error };
        }
    }
    async getCity(cityID) {
        try {
            const city = await City.findByPK(cityID);
            return city;
        }
        catch (error) {
            console.log('Something went wrong' , error);
            throw { error };
        }
    }
    async getAllCities(filter) {     
        //filter can be empty also.
        
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                })
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } 
        catch (error) {
            console.error("Something went wrong at repository layer", error);
        throw {error};
        }
    }


}

//try and catch is used for error handling ,

module.exports = CityRepository;