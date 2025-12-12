const { City } = require("../models/index")
const { Airport } = require("../models/index");

class cityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("error at repository layer");
            throw { error };
        }
    }

    async createMultipleCities(data){
        try {
            const cities=await City.bulkCreate(data);
            return cities;
        } catch (error) {
            console.log("error at repository layer");
            throw { error };
        }
    }

    async deleteCity(cityId ) {
        try {
            const city = await City.destroy({
                where: {
                    id: cityId
                }
            });
            return city;
        } catch (error) {
            console.log("error at repository layer");
            throw { error };
        }
    }

    async updateCity(data,cityId){
        try {
            const city=await City.update(data,{
            where:{
                id:cityId
            }
        });
        return city; 
        } catch (error) {
            console.log("error at repository layer");
            throw { error };
        } 
    }

    async getCity(cityId){
        try {
            const city=await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("error at repository layer");
            throw { error };
        }
    }

    async getCityAirports(cityId){
        try {
           const airports=await Airport.findAll({
            where:{
                cityId:cityId
            }
           });
           return airports;
        } catch (error) {
            console.log("error at repository layer");
            throw { error };
        }
    }
}


module.exports = cityRepository;