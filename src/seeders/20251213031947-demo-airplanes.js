'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('airplanes',[{
        airplane_model:"Airbus A380",
        capacity:250,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplane_model:"Boeing 747 ",
        capacity:300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplane_model:"Boeing 777 ",
        capacity:300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airplane_model:"Airbus A320 ",
        capacity:200,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
