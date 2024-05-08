'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('VehicleTypes', [
      { id:1, name: 'Hatchback', createdAt: new Date(), updatedAt: new Date() },
      { id:2, name: 'SUV', createdAt: new Date(), updatedAt: new Date() },
      { id:3, name: 'Sedan', createdAt: new Date(), updatedAt: new Date() },
      { id:4, name: 'Cruiser', createdAt: new Date(), updatedAt: new Date() },
      { id:5, name: 'Sports', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('VehicleTypes', null, {});
    
  }
};
