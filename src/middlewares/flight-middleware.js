const { clidentSideCodes } = require('../utils/service-error');

const validateCreateFlight=(req,res,next)=>{
    if(
        !req.body.flight_number ||
        !req.body.airplaneId ||
        !req.body.dest_airport_id ||
        !req.body.src_airport_id ||
        !req.body.arrival_date_time || 
        !req.body.departure_date_time || 
        !req.body.price
    ){
        return res.status(clidentSideCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }
    next();
}

module.exports = {
    validateCreateFlight
}
