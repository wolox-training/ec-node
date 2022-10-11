'use strict';

const db = require('./index');

module.exports = (sequelize, DataTypes) => {
  const Weet = sequelize.define(
    'Weet',
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
        references: {
          model: db.User,
          key: 'id'
        },
        field: 'user_id'
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [0, 140],
            msg: 'El Weet no puede tener mas de 140 caracteres'
          }
        }
      }
    },
    {
      tablename: 'weets',
      timestamps: false,
      underscored: true
    }
  );
  Weet.associate = models => {
    Weet.belongsTo(models.User, {
      as: 'user'
    });
  };
  return Weet;
};
