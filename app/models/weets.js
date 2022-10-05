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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      associate(models){
        weets.belongsTo(models.users, {
          foreingKey: 'userId',
          target_key: 'id',
        })
      }
    },
    {
      tablename: 'weets',
      timestamps: false
    }
  );
  return Weet;
};
