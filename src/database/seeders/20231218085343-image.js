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
     await queryInterface.bulkInsert('images', [
      {
        path: "/dummy/1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/2.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/3.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/4.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/5.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/6.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/7.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/8.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/9.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/10.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/11.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/12.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/13.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/14.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/15.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/16.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/17.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/18.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/19.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/20.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/21.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/22.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        path: "/dummy/23.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
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
      await queryInterface.bulkDelete('images', null, {});
  }
};
