const{ Airplane}=require("../models/index")
const CrudRepository = require("./crud-repository");

class airplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports=airplaneRepository;