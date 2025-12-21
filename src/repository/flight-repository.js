const { Flight }=require('../models/index')
const { Op } = require('sequelize');
const CrudRepository = require('./crud-repository');
const ValidationError = require("../utils/validation-error")
const AppError = require("../utils/App-error")
const { StatusCodes } = require('http-status-codes')


class flightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    #createFilter(data){
        let filter={};
        if(data.src_airport_id){
            filter.src_airport_id=data.src_airport_id;
        }
        if(data.dest_airport_id){
            filter.dest_airport_id=data.dest_airport_id;
        }
        let priceFilter=[]
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte]:data.minPrice},})
        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte]:data.maxPrice},})
        }
        Object.assign(filter,{[Op.and]:priceFilter});

        return filter;
    }
    

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flights=await Flight.findAll({
                where: filterObject
            });
            if(flights.length===0){
                throw new AppError(
                    "Not Found",
                    "Resource not found",
                    "The requested record does not exist",
                    StatusCodes.NOT_FOUND
                );
            }
            return flights;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError(
                "Repository Error",
                "cannot get what requested ",
                "there is some error in getting the request . Please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
}
}

module.exports=flightRepository;