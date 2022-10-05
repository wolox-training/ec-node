'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Weet extends Model {
    static associate(models) {
      Weet.belongsTo(models.User, {
        foreignKey: 'userId',
        targetKey: 'id'
      });
    }
  }
  Weet.init(
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
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      tablename: 'weets',
      timestamps: false
    }
  );
  return Weet;
};
