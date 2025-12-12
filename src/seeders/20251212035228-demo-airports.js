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
      await queryInterface.bulkInsert('airports',[{
        name:'ccs airport',
        cityId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'amousi airport',
        cityId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Jay Prakash Narayan Airport',
        cityId:4,
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
