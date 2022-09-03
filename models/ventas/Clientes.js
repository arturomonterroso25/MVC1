
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.Ventas,{
        foreignKey: "id_cliente",
      });

    }
  };
  Cliente.init({
    nomrbre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Direccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Nit: {
      type: DataTypes.STRING ,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};