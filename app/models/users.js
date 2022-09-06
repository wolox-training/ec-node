module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
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
      emial: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'El email tiene que ser un correo valido'
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [6, 255],
            msg: 'La contraseña tiene que tener minimamente 6 caracteres'
          }
        }
      }
    },
    {
      tablename: 'user_table'
    }
  );
  return User;
};
