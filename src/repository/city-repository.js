const { City } = require("../models/index")
const { Airport } = require("../models/index");
const { Op } = require('sequelize');

const CrudRepository = require('./crud-repository');

class cityRepository extends CrudRepository {
    constructor() {
        super(City);
    }

    async createMultipleCities(data) {
        try {
            const cities = await City.bulkCreate(data);
            return cities;
        } catch (error) {
            console.log("error at repository layer");
            throw error ;
        }
    }
    async getCityAirports(cityId) {
        try {
            const airports = await Airport.findAll({
                where: {
                    cityId: cityId
                }
            });
            return airports;
        } catch (error) {
            console.log("error at repository layer");
            throw error ;
        }
    }
    async getAllCity(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("error at repository layer");
            throw error ;
        }
    }
}

module.exports = cityRepository;