const express=require('express')
const{CityController}=require('../../controllers/city-controllers')
const routeer=express.Router();

routeer.post('/city',CityController.create);

module.exports=routeer;