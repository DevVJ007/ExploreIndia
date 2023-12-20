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
     await queryInterface.bulkInsert('packages',[
      {
        title: "Package 1",
        description: "Package 1",
        location: "delhi",
        price: 10000,
        user_id: 1,
        days: 1,
        nights: 1,
        tour_type_id: 1,
        activity_id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Package 2",
        description: "Package 2",
        location: "delhi",
        price: 10000,
        user_id: 1,
        days: 1,
        nights: 1,
        tour_type_id: 2,
        activity_id: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Package 3",
        description: "Package 3",
        location: "delhi",
        price: 10000,
        user_id: 1,
        days: 1,
        nights: 1,
        tour_type_id: 3,
        activity_id: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add 5 more packages with different tour_type_id and activity_id values
      {
        title: "Package 4",
        description: "Package 4",
        location: "delhi",
        price: 10000,
        user_id: 1,
        days: 1,
        nights: 1,
        tour_type_id: 4,
        activity_id: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Package 5",
        description: "Package 5",
        location: "delhi",
        price: 10000,
        user_id: 1,
        days: 1,
        nights: 1,
        tour_type_id: 5,
        activity_id: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Package 6",
        description: "Package 6",
        location: "delhi",
        price: 10000,
        user_id: 1,
        days: 1,
        nights: 1,
        tour_type_id: 6,
        activity_id: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Package 7",
        description: "Package 7",
        location: "delhi",
        price: 10000,
        user_id: 1,
        days: 1,
        nights: 1,
        tour_type_id: 7,
        activity_id: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Package 8",
        description: "Package 8",
        location: "delhi",
        price: 10000,
        user_id: 1,
        days: 1,
        nights: 1,
        tour_type_id: 8,
        activity_id: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('packages', null, {});
  }
};
