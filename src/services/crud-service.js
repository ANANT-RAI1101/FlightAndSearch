class CrudService{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try {
            const result=await this.repository.create(data);
            return result;
        } catch (error) {
            console.log("error at crud service layer");
            throw error;
        }
    }
    async get(id){
        try {
            const result=await this.repository.get(id);
            return result;
        } catch (error) {
            console.log("error at crud service layer");
            throw error;
        }
    }
    async update(id){
        try {
            const response=await this.repository.update(id);
            return response;
        } catch (error) {
            console.log("error at crud service layer");
            throw error;
        }
    }
    async delete(id){
        try {
            const response=await this.repository.delete(id);
            return response;
        } catch (error) {
            console.log("error at crud service layer");
            throw error;
        }
    }
}

module.exports=CrudService;