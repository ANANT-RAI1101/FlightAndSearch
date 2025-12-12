const{airportRepository}=require('../repository/index')

class airportService{
    constructor(){
        this.AirportService=new airportRepository();
    }

    async createAirport({name,cityId}){
        try {
            const airport= await this.AirportService.createAirport({name,cityId});
            return airport;
        } catch (error) {
            console.log("error at service layer");
            throw error;
            
        }
    }
    async updateAirport(data,cityId,airportId){
        try {
            const airport= await this.AirportService.updateAirport(data,cityId,airportId);
            return airport;
        } catch (error) {
            console.log("error at service layer");
            throw error;
            
        }
    }
    async getAirport(airportId,cityId){
        try {
            const airport= await this.AirportService.getAirport(airportId,cityId);
            return airport;
        } catch (error) {
            console.log("error at service layer");
            throw error;
            
        }
    }
    async deleteAirport(airportId,cityId){
        try {
            const airport= await this.AirportService.deleteAirport(airportId,cityId);
            return airport;
        } catch (error) {
            console.log("error at service layer");
            throw error;
            
        }
    }
}
module.exports= new airportService();