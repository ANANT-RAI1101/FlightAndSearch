const { Flight }=require('../models/index')
const { Op } = require('sequelize');

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
        Object.assign(filter,{[op.and]:priceFilter});

        return filter;
    }
    

    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flights=await Flight.findAll({
                where: filterObject
            })
            return flights;
        } catch (error) {
            console.log("error at repository layer")
            throw{error}
        }
}
}

module.exports=flightRepository;