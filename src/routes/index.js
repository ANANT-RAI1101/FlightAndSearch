const express=require('express')
const routeer=express.Router();

const v1ApiRoutes=require('./v1/index')

routeer.use('/v1',v1ApiRoutes);

module.exports=routeer;
