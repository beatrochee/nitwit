'use strict';
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        User.hasMany(models.Subscription, {
          foreignKey: 'subscriptionId',
          as: 'subscriptions',
        })
      }
    }
  });
  return User;
};