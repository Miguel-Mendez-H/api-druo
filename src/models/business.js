const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Business extends Model {}

  Business.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nit: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Business',
  });

  return Business;
};