
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventario extends Model {
    static associate(models) {
      inventario.hasMany(models.productos,{
        foreignKey: "id_producto",
      });
    }
  };
  inventario.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'inventario',
  });
  return inventario;
};