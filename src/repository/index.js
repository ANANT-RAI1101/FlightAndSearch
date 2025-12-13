const cityRepository = require("./city-repository");
const airportRepository=require("./airport-repository");
const airplaneRepository=require("./airplane-repository");
const flightRepository=require("./flight-repository")
const CrudRepository=require("./crud-repository")

module.exports={
    cityRepository,
    airportRepository,
    airplaneRepository,
    flightRepository,
    CrudRepository
}