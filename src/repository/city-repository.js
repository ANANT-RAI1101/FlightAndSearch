const { City } = require("../models/index")
const { Airport } = require("../models/index");
const { Op } = require('sequelize');

const CrudRepository = require('./crud-repository');
const AppError = require("../utils/App-error");
const ValidationError = require("../utils/validation-error")


class cityRepository extends CrudRepository {
    constructor() {
        super(City);
    }

    async createMultipleCities(data) {
        try {
            const cities = await City.bulkCreate(data);
            return cities;
        } catch (error) {
            if (error.name == "SequelizeValidationError") {
                throw new ValidationError(error);
            }
            throw new AppError(
                "Repository Error",
                "cannot create what requested ",
                "there is some error in creating the request . Please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }

    async getCityAirports(cityId) {
        try {
            const airports = await Airport.findAll({
                where: {
                    cityId: cityId
                }
            });
            if (airports.length===0) {
                throw new AppError(
                    "Not Found",
                    "Resource not found",
                    "The requested record does not exist",
                    StatusCodes.NOT_FOUND
                );
            }
            return airports;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError(
                "Repository Error",
                "cannot get what requested ",
                "there is some error in getting the request . Please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            )
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
                if (cities.length===0) {
                    throw new AppError(
                        "Not Found",
                        "Resource not found",
                        "The requested record does not exist",
                        StatusCodes.NOT_FOUND
                    );
                }
                return cities
            }
            const cities = await City.findAll();
            if (cities.length===0) {
                throw new AppError(
                    "Not Found",
                    "Resource not found",
                    "The requested record does not exist",
                    StatusCodes.NOT_FOUND
                );
            }
            return cities;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError(
                "Repository Error",
                "cannot get what requested ",
                "there is some error in getting the request . Please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

module.exports = cityRepository;