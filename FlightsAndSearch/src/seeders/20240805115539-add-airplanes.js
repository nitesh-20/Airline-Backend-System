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

    await queryInterface.bulkInsert('Airplanes', [
      {
      modelNumber:'Airbus A330',
      capacity:330,
      createdAt: new Date(),
      updateAt: new Date()
     },
     {
      modelNumber:'Boeing 747',
      capacity:220,
      createdAt: new Date(),
      updateAt: new Date()
     },
     {
      modelNumber:'Boeing 777',
      capacity:380,
      createdAt: new Date(),
      updateAt: new Date()
     },
     {
      modelNumber:'Vistara',
      capacity:200,
      createdAt: new Date(),
      updateAt: new Date()
     },
     {
      modelNumber:'Indigo',
      capacity:300,
      createdAt: new Date(),
      updateAt: new Date()
     },
     {
      modelNumber:'Airbus A320',
      capacity:200,
      createdAt: new Date(),
      updateAt: new Date()
     },
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
