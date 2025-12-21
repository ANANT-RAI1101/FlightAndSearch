const AppError=require("../utils/App-error")
const ServiceError=require("../utils/service-error")

class CrudService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try {
            const result=await this.repository.create(data);
            return result;
        } catch (error) {
            if(error.name=="SequelizeValidationError"||error.name=="Repository Error"){
                throw error;
            }
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode
            )
        }
    }
    async get(id){
        try {
            const result=await this.repository.get(id);
            return result;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode
            )
        }
    }
    async update(id,data){
        try {
            const response=await this.repository.update(id,data);
            return response;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode
            )
        }
    }
    async delete(id){
        try {
            const response=await this.repository.delete(id);
            return response;
        } catch (error) {
            throw new ServiceError(
                error.message,
                error.explanation,
                error.statusCode
            )
        }
    }
}

module.exports=CrudService;