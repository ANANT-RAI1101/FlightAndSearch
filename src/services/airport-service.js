const{airportRepository}=require('../repository/index')
const CrudService =require('./crud-service')
const ServiceError=require("../utils/service-error")


class airportService extends CrudService{
    constructor(){
       super(new airportRepository())
    }

    async updateAirport(data,cityId,airportId){
        try {
            const airport= await this.repository.updateAirport(data,cityId,airportId);
            return airport;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode

            )
            
        }
    }
    async getAirport(airportId,cityId){
        try {
            const airport= await this.repository.getAirport(airportId,cityId);
            return airport;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode

            )
            
        }
    }
    async deleteAirport(airportId,cityId){
        try {
            const airport= await this.repository.deleteAirport(airportId,cityId);
            return airport;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode

            )
            
        }
    }
}
module.exports= new airportService();