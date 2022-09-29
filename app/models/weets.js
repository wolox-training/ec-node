module.exports = (sequelize, DataTypes) => {
  const Weet = sequelize.define(
    'weets',
    {
      userId :{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [0, 255],
            msg: 'La contraseña tiene que tener minimamente 8 caracteres'
          }
        }
      }
    },
    {
      tablename: 'weets',
      timestamps: false
    }
  );
  return Weet;
};
