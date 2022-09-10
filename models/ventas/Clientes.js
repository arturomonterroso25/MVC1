'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    static associate(models) {
      cliente.belongsTo(models.tipo_clientes,{
        foreignKey: "ID_Tipo_Cliente"
      }); //pertenece a en la tabla hijo
    }
  };
  cliente.init({
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Telefono:{
      type: DataTypes.STRING, 
      allowNull: false
    },
    Direccion:{
      type: DataTypes.STRING,
      allowNull: false
    },
    ID_Tipo_Cliente:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updatedAt:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'clientes'
  });
  return cliente;
};
