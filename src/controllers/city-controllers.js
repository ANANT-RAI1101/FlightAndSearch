const{cityService}=require('../services/index')
const { successCodes } = require('../utils/error-codes');


const create=async(req, res)=>{
    try {
        const city=await cityService.create(req.body);
        return res.status(successCodes.OK).json({
            data:city,
            success:true,
            message:'city created successfully',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'city not created successfully',
            err:error
        })
    }
}
const multipleCities=async (req,res)=>{
    try {
        const cities=await cityService.createMultipleCities(req.body)
        return res.status(successCodes.CREATED).json({
            data:cities,
            success:true,
            message:"multiple cities created",
            err:{}
        })
    } catch (error) {
         return res.status(500).json({
            data:{},
            success:false,
            message:'city not created successfully',
            err:error
         })
    }
}
const destroy=async(req, res)=>{
    try {
        const response=await cityService.delete(req.params.id);
        return res.status(successCodes.OK).json({
            data:response,
            success:true,
            message:'city deleted successfully',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'city not deleted successfully',
            err:error
        })
    }
}
const get=async(req, res)=>{
    try {
        const city=await cityService.get(req.params.id);
        return res.status(successCodes.OK).json({
            data:city,
            success:true,
            message:'city fetched successfully',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'city not fetched successfully',
            err:error
        })
    }
}
const allAirports=async (req,res)=>{
    try {
        const airports=await cityService.getCityAirports(req.params.id);
        return res.status(successCodes.OK).json({
            data:airports,
            success:true,
            message:"all airports of the cities are fetched",
            err:{}
    })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'airports not fetched successfully',
            err:error
        })
    }
    
}
const update=async(req, res)=>{
    try {
        const city=await cityService.update(req.body,req.params.id);
        return res.status(successCodes.OK).json({
            data:city,
            success:true,
            message:'city updated successfully',
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:'city not updated successfully',
            err:error
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const cities=await cityService.getAllCity(req.query);
        return res.status(successCodes.OK).json({
            data: cities,
            success: true,
            message: 'Successfully fetched all cities',
            err: {}
        });
        } catch (error) {
            return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the cities',
            err: error
        });
        }
    }


module.exports={
    create,
    destroy,
    get,
    update,
    multipleCities,
    allAirports,
    getAll
};