const { Airport } = require("../models/index");
const CrudRepository = require('./crud-repository');
const ValidationError = require("../utils/validation-error")
const AppError = require("../utils/App-error")


class airportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }
    async deleteAirport(airportId, cityId) {
        try {
            const airport = await Airport.destroy({
                where: {
                    id: airportId,
                    cityId: cityId
                }
            });
            if (!airport) {
                throw new AppError(
                    "Not Found",
                    "Resource not found",
                    "Nothing to delete",
                    StatusCodes.NOT_FOUND
                );
            }
            return airport;
        } catch (error) {
            if (error instanceof AppError) throw error;
            throw new AppError(
                "Repository Error",
                "cannot delete what requested ",
                "there is some error in deleting the request . Please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
    async getAirport(airportId, cityId) {
        try {
            const airport = await Airport.findOne({
                where: {
                    cityId: cityId,
                    id: airportId
                }
            });
            if (!airport) {
                throw new AppError(
                    "Not Found",
                    "Resource not found",
                    "The requested record does not exist",
                    StatusCodes.NOT_FOUND
                );
            }
            return airport;
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
    async updateAirport(data, cityId, airportId) {
        try {
            const [airport] = await Airport.update(data, {
                where: {
                    id: airportId,
                    cityId: cityId
                }
            });
            if (airport===0) {
                throw new AppError(
                    "Not Found",
                    "Resource not found",
                    "Nothing to update",
                    StatusCodes.NOT_FOUND
                );
            }
            return airport;
        } catch (error) {
            if (error.name == "SequelizeValidationError") {
                throw new ValidationError(error);
            }
            if (error instanceof AppError) throw error;
            throw new AppError(
                "Repository Error",
                "cannot upadate what requested ",
                "there is some error in updating the request . Please try again later",
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

module.exports = airportRepository;