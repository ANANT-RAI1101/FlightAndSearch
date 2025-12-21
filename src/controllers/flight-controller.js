const { flightService } = require('../services/index')
const { StatusCodes } = require('http-status-codes')


const create = async (req, res) => {
    try {
        const flightRequestData = {
            flight_number: req.body.flight_number,
            airplaneId: req.body.airplaneId,
            dest_airport_id: req.body.dest_airport_id,
            src_airport_id: req.body.src_airport_id,
            arrival_date_time: req.body.arrival_date_time,
            departure_date_time: req.body.departure_date_time,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(StatusCodes.OK).json({
            data: flight,
            success: true,
            message: "flight created succesfully",
            err: {}
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            data: {},
            err: error.explanation
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightService.getAllFlights(req.query);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            data: {},
            err: error.explanation
        })
    }
}

const updateFlight = async (req, res) => {
    try {
        const response = await flightService.update(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully updated the flights'
        })
    } catch (error) {
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            data: {},
            err: error.explanation
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode).json({
            message: error.message,
            success: false,
            data: {},
            err: error.explanation
        })
    }
}




module.exports = {
    create,
    getAll,
    get,
    updateFlight
}