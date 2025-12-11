const express=require('express')
const CityController=require('../../controllers/city-controllers')
const routeer=express.Router();

routeer.post('/city',CityController.create);
routeer.delete('/city/:id',CityController.destroy);
routeer.get('/city/:id',CityController.get);
routeer.patch('/city/:id',CityController.update);

module.exports=routeer;