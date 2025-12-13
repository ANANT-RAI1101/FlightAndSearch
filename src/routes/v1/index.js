const express=require('express')
const CityController=require('../../controllers/city-controllers')
const AirportController=require('../../controllers/airport-controller')
const FlightController=require('../../controllers/flight-controller')
const routeer=express.Router();

routeer.post('/city',CityController.create);
routeer.post('/cities',CityController.multipleCities);
routeer.delete('/city/:id',CityController.destroy);
routeer.get('/city/:id',CityController.get);
routeer.get('/cityairports/:id',CityController.allAirports);
routeer.get('/cities',CityController.getAll);
routeer.patch('/city/:id',CityController.update);

// for airports
routeer.post('/airport',AirportController.create);
routeer.delete('/city/:cityId/airport/:airportId',AirportController.destroy);
routeer.get('/city/:cityId/airport/:airportId',AirportController.get);
routeer.patch('/city/:cityId/airport/:airportId',AirportController.update);

// for flight

routeer.post('/flight',FlightController.create);
routeer.get('/flights',FlightController.getAll);
routeer.get('/flights/:id',FlightController.get);

module.exports=routeer;