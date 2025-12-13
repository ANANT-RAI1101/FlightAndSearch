const{airportRepository}=require('../repository/index')
const CrudService =require('./crud-service')


class airportService extends CrudService{
    constructor(){
       super(new airportRepository())
    }

    async updateAirport(data,cityId,airportId){
        try {
            const airport= await this.repository.updateAirport(data,cityId,airportId);
            return airport;
        } catch (error) {
            console.log("error at service layer");
            throw error;
            
        }
    }
    async getAirport(airportId,cityId){
        try {
            const airport= await this.repository.getAirport(airportId,cityId);
            return airport;
        } catch (error) {
            console.log("error at service layer");
            throw error;
            
        }
    }
    async deleteAirport(airportId,cityId){
        try {
            const airport= await this.repository.deleteAirport(airportId,cityId);
            return airport;
        } catch (error) {
            console.log("error at service layer");
            throw error;
            
        }
    }
}
module.exports= new airportService();