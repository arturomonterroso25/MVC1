
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleado extends Model {
    static associate(models) {

    }
  };
  empleado.init({
    user: {
      name: DataTypes.STRING,
      allowNull: false
    },
    CUI: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_birth: {
      type: DataTypes.DATE,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'empleados',
  });
  return empleado;
};