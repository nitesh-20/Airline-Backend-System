const {City} = require("../models/index");

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }
        catch(err){
            console.error("Error creating city:",err);
            throw {err};
        }
    }
    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            })
        } 
        catch(error){
            console.error("Error deleting city:",error);
            throw {error};
        }
    }

        async updateCity(cityId,data){
            try{
                const city = await City.update(data,{
                    where:{
                        id:cityId
                    }
                })
                return city;
            }
            catch(error){
                console.error("Something went wrong:",error);
                throw {error};
            }
        }

    async getCity(cityId){
        try{
            const city = await city.findByPk(cityId);
            return city;
        } 
        catch(error){
            console.error("Something went wrong",error);
            throw {error};
        }
    }

}
module.exports = CityRepository;