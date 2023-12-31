"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("package_images", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      package_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Add any additional constraints or associations here if needed
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("package_images");
  },
};
