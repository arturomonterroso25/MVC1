
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venta extends Model {
    static associate(models) {
      Venta.belongsTo(models.Cliente,{
        foreignKey: "iid_cliente",
      });

    }
  };
  Venta.init({
    codigo_venta: {
      type: DataTypes.init,
      allowNull: false
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Producto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Precio_Producto: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Subtotal: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Venta',
  });
  return Venta;
};