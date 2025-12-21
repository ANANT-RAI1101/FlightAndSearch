const{flightRepository}=require('../repository/index')
const {airplaneRepository} = require('../repository/index')
const CrudService =require('./crud-service')
const ServiceError=require("../utils/service-error")

const { compareTime } = require('../utils/helper');


class flightService extends CrudService{
    constructor(){
        super(new flightRepository());
        this.FlightService=new flightRepository();
        this.AirplaneRepository=new airplaneRepository();
    }

    async createFlight(data){
        try {
            if(!compareTime(data.arrival_date_time, data.departure_date_time)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane=await this.AirplaneRepository.get(data.airplaneId)
            const flight=await this.FlightService.create({
                ...data,totalSeats:airplane.capacity 
            });
            return flight;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode

            )  
        }
    }

    async getFlight(airplaneId){
        try {
            const flight=await this.FlightService.get(airplaneId);
            return flight;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode

            )   
        }
    }

    async getAllFlights(filter){
        try {
            const flight=await this.FlightService.getAllFlights(filter);
            return flight;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode

            )
            
            
        }
    }
}

module.exports=new flightService();