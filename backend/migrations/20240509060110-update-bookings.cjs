'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'Bookings',
      'createdAt',
      {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    );
    await queryInterface.addColumn(
      'Bookings',
      'updatedAt',
      {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Bookings', 'updatedAt');
    await queryInterface.removeColumn('Bookings', 'createdAt');
  },
};
