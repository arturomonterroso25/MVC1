
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proveedor extends Model {
    static associate(models) {

    }
  };
  proveedor.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type_paid: {
      type: DataTypes.STRING,
      allowNull: false
    }
    ,
    days: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'proveedores',
  });
  return proveedor;
};