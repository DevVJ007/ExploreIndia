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
    await queryInterface.bulkInsert('tags', [{
      tag: "Adventure Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Cultural Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Historical Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Culinary Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Educational Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Wildlife Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Beach Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "City Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Nature Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Sightseeing Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Religious Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Hiking Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Cycling Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Water Sports Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Photography Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Luxury Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Family-Friendly Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Group Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Solo Travel Tours",
      type_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Adventure Sports",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Beach Relaxation",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Biking",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Boat Tours",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "City Exploration",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Culinary Experiences",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Cultural Experiences",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Hiking",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Historical Sites",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Museum Visits",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Nature Walks",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Nightlife Experiences",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Photography",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Shopping",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Sightseeing",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Snorkeling",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Spa & Wellness",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Water Sports",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Wildlife Spotting",
      type_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tag: "Wine Tasting",
      type_id: 2,
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
      await queryInterface.bulkDelete('tags', null, {});
  }
};
