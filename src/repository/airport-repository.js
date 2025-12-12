const { Airport } = require("../models/index");

class airportRepository{
    async createAirport({name,cityId}){
        try {
            const airport=await Airport.create({
                name,
                cityId
            });
            return airport;   
        } catch (error) {
            console.log("error in repository layer");
            throw error;
        }
    }
    async deleteAirport(airportId,cityId){
        try {
            const airport=await Airport.destroy({
                where:{
                    id:airportId,
                    cityId:cityId
                }
            });
            return airport;     
        } catch (error) {
            console.log("error in repository layer");
            throw error;
        }
    }
    async getAirport(airportId,cityId){
        try {
            const airport=await Airport.findOne({
                where:{
                    cityId:cityId,
                    id:airportId
                }
            });
            return airport;     
        } catch (error) {
            console.log("error in repository layer");
            throw error;
        }
    }
    async updateAirport(data,cityId,airportId){
        try {
            const airport=await Airport.update(data,{
                where:{
                    id:airportId,
                    cityId:cityId
                }
            });
            return airport;     
        } catch (error) {
            console.log("error in repository layer");
            throw error;
        }
    }
}

module.exports= airportRepository;