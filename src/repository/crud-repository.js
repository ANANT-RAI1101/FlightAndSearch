const ValidationError = require("../utils/validation-error")
const AppError = require("../utils/App-error")
const { StatusCodes } = require('http-status-codes')


class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
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
    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            if (!result) {
                throw new AppError(
                    "Not Found",
                    "Resource not found",
                    "The requested record does not exist",
                    StatusCodes.NOT_FOUND
                );
            }
            return result;
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
    async delete(modelId) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: modelId
                }
            });
            if (!response) {
                throw new AppError(
                    "Not Found",
                    "Resource not found",
                    "Nothing to delete",
                    StatusCodes.NOT_FOUND
                );
            }
            return response;
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
    async update(modelId, data) {
        try {
            const [response] = await this.model.update(data, {
                where: {
                    id: modelId
                }
            });
            if (response===0) {
                throw new AppError(
                    "Not Found",
                    "Resource not found",
                    "Nothing to update",
                    StatusCodes.NOT_FOUND
                );
            }
            return response;
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

module.exports = CrudRepository;