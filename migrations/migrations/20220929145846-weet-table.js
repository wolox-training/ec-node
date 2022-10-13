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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [0, 140],
            msg: 'El Weet no puede tener mas de 140 caracteres'
          }
        }
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('weets');
  }
};
