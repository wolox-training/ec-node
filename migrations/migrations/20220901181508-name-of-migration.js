'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: Sequelize.INTEGER,
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      pasword: Sequelize.STRING
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
};
