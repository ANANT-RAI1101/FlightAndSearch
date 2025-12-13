const{cityRepository}=require('../repository/index')
const CrudService =require('./crud-service')

class cityService extends CrudService{
    constructor() {
    super(new cityRepository());
  }

    async createMultipleCities(data){
        try {
            const cities=await this.repository.createMultipleCities(data);
            return cities
        } catch (error) {
            console.log('error at service layer');
            throw error;
        }
    }

    async getCityAirports(cityId){
        try {
            const airports=await this.repository.getCityAirports(cityId);
            return airports;
        } catch (error) {
            console.log('error at service layer');
            throw error;
        }
    }

    async getAllCity(filter){
        try {
            const cities=await this.repository.getAllCity(filter);
            return cities;
        } catch (error) {
            console.log('error at service layer');
            throw error;
        }
    }
}

module.exports=new cityService();