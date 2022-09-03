
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {

    }
  };
  usuario.init({
    cantidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    producto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigo_producto: {s
      type: DataTypes.STRING,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.REAL,
      allowNull: false
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'inventarios',
  });
  return usuario;
};