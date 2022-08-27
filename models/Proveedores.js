

'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleados extends Model {
    static associate(models) {

    }
  };
  empleados.init({
    idempleado: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    encargado: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nit: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    direccion: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return empleados;
};