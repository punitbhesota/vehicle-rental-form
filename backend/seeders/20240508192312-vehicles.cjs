'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Vehicles', [
      { type_id: 1, model: 'Ford Focus', createdAt: new Date(), updatedAt: new Date() },
      { type_id: 1, model: 'Toyota Yaris', createdAt: new Date(), updatedAt: new Date() },
      { type_id: 2, model: 'Toyota RAV4', createdAt: new Date(), updatedAt: new Date() },
      { type_id: 2, model: 'Honda CR-V', createdAt: new Date(), updatedAt: new Date() },
      { type_id: 3, model: 'Toyota Camry', createdAt: new Date(), updatedAt: new Date() },
      { type_id: 3, model: 'Honda Accord', createdAt: new Date(), updatedAt: new Date() },
      { type_id: 4, model: 'Harley-Davidson Street Glide', createdAt: new Date(), updatedAt: new Date() },
      { type_id: 4, model: 'Yamaha V Star 1300', createdAt: new Date(), updatedAt: new Date() },
      { type_id: 5, model: 'Ferrari 488 GTB', createdAt: new Date(), updatedAt: new Date() },
      { type_id: 5, model: 'Porsche 911 GT3 RS', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
