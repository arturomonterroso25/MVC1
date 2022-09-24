
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venta extends Model {
    static associate(models) {
      Venta.belongsTo(models.clientes, {
        foreignKey: "id_clinte",
      });
      Venta.belongsTo(models.detalle_venta, {
        foreignKey: "id_detalle_venta",
      });
    }
  };
  Venta.init({

    monto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    estado: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    id_clinte: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_detalle_venta: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'ventas',
  });
  return Venta;
};