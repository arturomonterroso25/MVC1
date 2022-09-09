
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventarios extends Model {
    static associate(models) {
      inventarios.belongsTo(models.productos, {
        foreignKey: "id_producto",
      });
    }
  };
  inventarios.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'inventarios',
  });
  return inventarios;
};