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
    await queryInterface.bulkInsert('user_images', [
      {
        user_id: 1,
        image_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        image_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        image_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        image_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('user_images', null, {});
  }
};
