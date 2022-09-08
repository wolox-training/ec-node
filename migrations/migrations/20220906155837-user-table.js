'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: 'El nombre solo puede contener letras'
          },
          len: {
            args: [2, 255],
            msg: 'El nombre tiene que tener como minimo dos caracteres'
          }
        }
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: 'El apellido solo puede contener letras'
          },
          len: {
            args: [2, 255],
            msg: 'El apellido tiene que tener como minimo dos caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'El email tiene que ser un correo valido'
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: 'La contraseña tiene que tener minimamente 6 caracteres'
          }
        }
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
};
