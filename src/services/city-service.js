const{cityRepository}=require('../repository/index')

class cityService{
    constructor(){
        this.CityService=new cityRepository();
    }

    async createCity(data){
        try {
            const city=await this.CityService.createCity(data);
            return city;
        } catch (error) {
            console.log('error at service layer');
            throw{error};
        }
    }

    async createMultipleCities(data){
        try {
            const cities=await this.CityService.createMultipleCities(data);
            return cities
        } catch (error) {
            console.log('error at service layer');
            throw{error};
        }
    }

    async deleteCity(cityId){
        try {
            const response=await this.CityService.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log('error at service layer');
            throw{error};
        }
    }
    async getCity(cityId){
        try {
            const city=await this.CityService.getCity(cityId);
            return city;
        } catch (error) {
            console.log('error at service layer');
            throw{error};
        }
    }
    async getCityAirports(cityId){
        try {
            const airports=await this.CityService.getCityAirports(cityId);
            return airports;
        } catch (error) {
            console.log('error at service layer');
            throw{error};
        }
    }
    async updateCity(data,cityId){
        try {
            const city=await this.CityService.updateCity(data,cityId);
            return city;
        } catch (error) {
            console.log('error at service layer');
            throw{error};
        }
    }
}

module.exports=new cityService();