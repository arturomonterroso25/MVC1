
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    static associate(models) {
      Cliente.hasMany(models.ventas, {
        foreignKey: "id_clinte",
      });

    }
  };
  Cliente.init({
    nombre: {
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
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    sequelize,
    modelName: 'clientes',
  });
  return Cliente;
};