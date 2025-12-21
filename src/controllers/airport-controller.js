const{airportService}=require('../services/index')
const { StatusCodes } = require('http-status-codes')


const create= async (req,res)=>{
    try {
        const airport=await airportService.create(req.body);
        return res.status(StatusCodes.OK).json({
            data:airport,
            success:true,
            message:"airport created successfully",
            err:{}
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

const get= async (req,res)=>{
    try {
        const {cityId,airportId}=req.params;
        const airport=await airportService.getAirport(airportId,cityId);
        return res.status(StatusCodes.OK).json({
            data:airport,
            success:true,
            message:"airport fetched successfully",
            err:{}
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

const update= async (req,res)=>{
    try {
        const {cityId,airportId}=req.params;
        const airport=await airportService.updateAirport(req.body,cityId,airportId);
        return res.status(StatusCodes.CREATED).json({
            data:airport,
            success:true,
            message:"airport updated successfully",
            err:{}
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

const destroy= async (req,res)=>{
    try {
        const {cityId,airportId}=req.params;
        const response=await airportService.deleteAirport(airportId,cityId);
        return res.status(StatusCodes.OK).json({
            data:response,
            success:true,
            message:"airport deleted successfully",
            err:{}
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

module.exports={
    create,
    get,
    update,
    destroy
}