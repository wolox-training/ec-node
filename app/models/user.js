module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      id: DataTypes.INT,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {
      tablename: 'user_table'
    }
  );
  return User;
};
