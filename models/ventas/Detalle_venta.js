'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detalle_venta extends Model {
    static associate(models) {
        Detalle_venta.hasMany(models.ventas, {
        foreignKey: "id_detalle_venta",
      });
     
    }
  };
  Detalle_venta.init({

    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'detalle_venta',
  });
  return Detalle_venta;
};