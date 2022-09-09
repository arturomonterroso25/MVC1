'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_usuario extends Model {
    static associate(models) {
      tipo_usuario.hasMany(models.usuarios,{
        foreignKey: "ID_Tipo",
      }); //Tiene muchos en la tabla padre
    }
  };
  tipo_usuario.init({
    Tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Departamento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {  
      allowNull: false, 
      type: DataTypes.DATE },
  }, {
    sequelize,
    modelName: 'tipo_usuarios',
  });
  return tipo_usuario;
};