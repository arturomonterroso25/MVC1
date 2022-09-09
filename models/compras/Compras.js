
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class compra extends Model {
    static associate(models) {
      compra.belongsTo(models.proveedores,{
        foreignKey: "id_proveedor",
      });
    
    }
  };
  compra.init({
   
    id_proveedor: {
      allowNull: false,
      type: DataTypes.INTEGER
    }, 
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'compras',
  });
  return compra;
};