const{cityRepository}=require('../repository/index')
const CrudService =require('./crud-service')
const ServiceError=require("../utils/service-error")


class cityService extends CrudService{
    constructor() {
    super(new cityRepository());
  }

    async createMultipleCities(data){
        try {
            const cities=await this.repository.createMultipleCities(data);
            return cities
        } catch (error) {
            if (error.name == "ValidationError" || error.name == "Repository Error") {
                throw error
            }
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode

            )
        }
    }

    async getCityAirports(cityId){
        try {
            const airports=await this.repository.getCityAirports(cityId);
            return airports;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode
            )
        }
    }

    async getAllCity(filter){
        try {
            const cities=await this.repository.getAllCity(filter);
            return cities;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode
            )
        }
    }
}

module.exports=new cityService();