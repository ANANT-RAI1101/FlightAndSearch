const{airportService}=require('../services/index')

// createAirport->name city id->/api/v1/airport/create
// getAirport->cityId and airportId->/api/v1/city/:id/airport/:id
// updateAirport->name cityid->/api/v1/city/:id/airport/:id
// deleteAirport-> airportid cityid->/api/v1/city/:id/airport/:id

const create= async (req,res)=>{
    try {
        const airport=await airportService.createAirport(req.body);
        return res.status(201).json({
            data:airport,
            success:true,
            message:"airport created successfully",
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"airport not created successfully",
            err:{error}
        });
    }
}

const get= async (req,res)=>{
    try {
        const {cityId,airportId}=req.params;
        const airport=await airportService.getAirport(airportId,cityId);
        return res.status(200).json({
            data:airport,
            success:true,
            message:"airport fetched successfully",
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"airport not fetched successfully",
            err:{error}
        });
    }
}

const update= async (req,res)=>{
    try {
        const {cityId,airportId}=req.params;
        const airport=await airportService.updateAirport(req.body,cityId,airportId);
        return res.status(200).json({
            data:airport,
            success:true,
            message:"airport updated successfully",
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"airport not updated successfully",
            err:{error}
        });
    }
}

const destroy= async (req,res)=>{
    try {
        const {cityId,airportId}=req.params;
        const response=await airportService.deleteAirport(airportId,cityId);
        return res.status(200).json({
            data:response,
            success:true,
            message:"airport deleted successfully",
            err:{}
        });
    } catch (error) {
        return res.status(500).json({
            data:{},
            success:false,
            message:"airport not deleted successfully",
            err:{error}
        });
    }
}

module.exports={
    create,
    get,
    update,
    destroy
}