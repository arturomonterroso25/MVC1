
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class proveedor extends Model {
  };
  proveedor.init({
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Telefono: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'proveedores',
  });
  return proveedor;
};