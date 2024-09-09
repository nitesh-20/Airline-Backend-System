const { User } = require("../models/");

class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch(error) {
            console.log("something went wrong on repository layer",error);
        }
    }

    async destroy(userId) {
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            })
            return true;
        } catch(error) {
            console.log("something went wrong on repository layer",error);
        }
    }
    async getById(userId) {
        try {
            const user = await User.findByPk(userId,{
                attributes: ['email', 'id']
            })
            return user;
        } catch (error) {
            console.log("something went wrong on repository layer", error);
            throw error;
        } 
    }

    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({
                where: {
                    email: userEmail
                }
            });
            return user;
        } catch (error) {
            console.log("something went wrong on repository layer", error);
            throw error;
        }
    }
}

module.exports = UserRepository;