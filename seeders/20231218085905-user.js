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
    await queryInterface.bulkInsert('users', [
      {
        name: "Admin",
        email: "test@gmail.com",
        password: "admin",
        role: 1,
        mobile: "1234567890",
        bio: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "User",
        email: "user@gmail.com",
        password: "user",
        role: 2,
        mobile: "1234567890",
        bio: "User",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: "User1",
        email: "user1@gmail.com",
        password: "user1",
        role: 2,
        mobile: "1234567890",
        bio: "User1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User2",
        email: "user2@gmail.com",
        password: "user2",
        role: 2,
        mobile: "1234567890",
        bio: "User2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User3",
        email: "user3@gmail.com",
        password: "user3",
        role: 2,
        mobile: "1234567890",
        bio: "User3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more users here...
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('users', null, {});
  }
};
