
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      proveedor.belongsTo(models.proveedor,{
        foreignKey: "id_proveedor",
      });
    
    }
  };
  usuario.init({
    Codigo_compra: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Produto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Total: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'compras',
  });
  return usuario;
};