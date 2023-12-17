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
    await queryInterface.bulkInsert('tag_types', [{
      type: 'Tour Type',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'Activity',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'State',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'City',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: 'Place',
      createdAt: new Date(),
      updatedAt: new Date()
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
      await queryInterface.bulkDelete('tag_types', null, {});
  }
};
