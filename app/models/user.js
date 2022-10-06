'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
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
      tablename: 'users',
      timestamps: false
    }
  );
  User.associate = models => {
    User.hasMany(models.Weet, {
      as: 'weets',
      foreignKey: 'user_id'
    });
  };
  return User;
};
