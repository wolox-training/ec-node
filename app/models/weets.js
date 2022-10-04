module.exports = (sequelize, DataTypes) => {
  const Weet = sequelize.define(
    'weets',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true
      },
      email :{
        type: DataTypes.INTEGER,
        allowNull: false,
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
