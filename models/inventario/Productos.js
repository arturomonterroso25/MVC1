
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producto extends Model {
    static associate(models) {
      producto.belongsTo(models.inventario,{
        foreignKey: "id_producto",
      });
    }
  };
  producto.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    catidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'producto',
  });
  return producto;
};