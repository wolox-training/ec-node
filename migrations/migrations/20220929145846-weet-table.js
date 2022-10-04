'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('weets', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      email: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('weets');
  }
};
