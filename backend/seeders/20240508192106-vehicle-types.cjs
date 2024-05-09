'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('VehicleTypes', [
      { id:1, name: 'Hatchback', type: "car", createdAt: new Date(), updatedAt: new Date() },
      { id:2, name: 'SUV', type: "car", createdAt: new Date(), updatedAt: new Date() },
      { id:3, name: 'Sedan', type: "car", createdAt: new Date(), updatedAt: new Date() },
      { id:4, name: 'Cruiser', type: "bike",createdAt: new Date(), updatedAt: new Date() },
      { id:5, name: 'Sports', type: "bike", createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('VehicleTypes', null, {});
    
  }
};
