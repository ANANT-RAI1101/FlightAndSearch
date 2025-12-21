const { cityService } = require('../services/index')
const { StatusCodes } = require('http-status-codes')



const create = async (req, res) => {
    try {
        const city = await cityService.create(req.body);
        return res.status(StatusCodes.OK).json({
            data: city,
            success: true,
            message: 'city created successfully',
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
const multipleCities = async (req, res) => {
    try {
        const cities = await cityService.createMultipleCities(req.body)
        return res.status(StatusCodes.OK).json({
            data: cities,
            success: true,
            message: "multiple cities created",
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
const destroy = async (req, res) => {
    try {
        const response = await cityService.delete(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'city deleted successfully',
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
const get = async (req, res) => {
    try {
        const city = await cityService.get(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: city,
            success: true,
            message: 'city fetched successfully',
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
const allAirports = async (req, res) => {
    try {
        const airports = await cityService.getCityAirports(req.params.id);
        return res.status(StatusCodes.OK).json({
            data: airports,
            success: true,
            message: "all airports of the cities are fetched",
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
const update = async (req, res) => {
    try {
        const city = await cityService.update(req.body, req.params.id);
        return res.status(StatusCodes.OK).json({
            data: city,
            success: true,
            message: 'city updated successfully',
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
        const cities = await cityService.getAllCity(req.query);
        return res.status(StatusCodes.OK).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
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


module.exports = {
    create,
    destroy,
    get,
    update,
    multipleCities,
    allAirports,
    getAll
};