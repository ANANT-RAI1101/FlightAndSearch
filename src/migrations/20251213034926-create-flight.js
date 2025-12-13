'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flight_number: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
      src_airport_id: {
        type: Sequelize.STRING,
        allowNull:false
      },
      dest_airport_id: {
        type: Sequelize.STRING,
        allowNull:false
      },
      arrival_date_time: {
        type: Sequelize.DATE,
        allowNull:false
      },
      departure_date_time: {
        type: Sequelize.DATE,
        allowNull:false
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};