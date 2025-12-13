const { flightService }=require('../services/index')

const create=async (req,res)=>{
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
        const flight=await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"flight created succesfully",
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

const getAll=async (req,res)=>{
    try {
        const response=await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        });
    }   catch (error) {
         return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flights',
            err: error
         })
        }
    }

    const get = async (req, res) => {
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            err: {},
            message: 'Successfully fetched the flight'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
    }
}




module.exports={
    create,
    getAll,
    get
}