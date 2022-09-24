'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sucursal extends Model {
    static associate(models) {
      sucursal.belongsTo(models.empleados,{
        foreignKey: "ID_Sucursal",
      }); //pertenece a en la tabla hijo
    }
  };
  sucursal.init({
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updatedAt:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Direccion:{type: DataTypes.STRING,
    allowNull: false},
  }, {
    sequelize,
    modelName: 'sucursales'
  });
  return sucursal;
};
