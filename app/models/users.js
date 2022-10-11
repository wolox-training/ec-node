'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Weet, {
        foreignKey: 'id'
      });
    }
  }
  User.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      first_name: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'El email tiene que ser un correo valido'
          },
          contains: {
            args: ['@wolox'],
            msg: 'El email debe ser del dominio wolox'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 255],
            msg: 'La contraseña tiene que tener minimamente 8 caracteres'
          }
        }
      },
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        value: false
      }
    },
    {
      sequelize,
      tablename: 'users',
      timestamps: false
    }
  );
  return User;
};
