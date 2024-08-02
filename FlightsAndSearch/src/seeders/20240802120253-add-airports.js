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

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Swami Vivekananda Airport',
        cityId:1,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'chhatrapati shivaji airport',
        cityId:3,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'indira gandhi international airport ',
        cityId:4,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'Kempegowda International Airport Bengaluru | Bangalore',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'Hindustan Aeronautics Limited Airport',
        cityId:5,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ], {});
   
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
