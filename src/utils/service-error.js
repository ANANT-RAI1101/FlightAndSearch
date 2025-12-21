const { StatusCodes}=require('http-status-codes')

class ServiceError extends Error{
    constructor(
        message="Something Went Wrong!!",
        explanation="Service layer Error",
        StatusCode=StatusCodes.INTERNAL_SERVER_ERROR
    ){
        super();
        this.name="Service Error",
        this.message=message,
        this.explanation=explanation,
        this.StatusCode=StatusCode
    }
}

module.exports=ServiceError;