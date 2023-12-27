'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Businesses', [{
      name: 'Business 1',
      nit: '1234',
      mail: 'business1@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Business 2',
      nit: '5678',
      mail: 'business2@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Businesses', null, {});
  }
};