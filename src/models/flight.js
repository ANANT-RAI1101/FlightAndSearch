'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flight_number: {
      type:DataTypes.STRING,
      unique:true,
        allowNull:false

    },
    src_airport_id: {
      type:DataTypes.STRING,
      allowNull:false

    },
    dest_airport_id: {
      type:DataTypes.STRING,
      allowNull:false
    },
    arrival_date_time: {
      type:DataTypes.DATE,
      allowNull:false
    },
    departure_date_time: {
      type:DataTypes.DATE,
      allowNull:false
  },
  price: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
    airplaneId: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};