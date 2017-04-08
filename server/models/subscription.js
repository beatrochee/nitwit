'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subscription = sequelize.define('Subscription', {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    max: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        Subscription.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Subscription;
};