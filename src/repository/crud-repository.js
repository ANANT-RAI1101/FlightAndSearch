class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
        } catch (error) {
            console.log("there is an error in crud repository");
            throw error;
        }
    }
    async get(modelId){
        try {
            const result=await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("there is an error in crud repository");
            throw error;
        }
    }
    async delete(modelId){
        try {
            const response=await this.model.destroy({
                where:{
                    id:modelId
                }
            });
            return response;
        } catch (error) {
            console.log("there is an error in crud repository");
            throw error;
        }
    }
    async update(modelId,data){
        try {
            const response=await this.model.update(data,{
                where:{
                    id:modelId
                }
            });
            return response;
        } catch (error) {
            console.log("there is an error in crud repository");
            throw error;
        }
    }
}

module.exports=CrudRepository;