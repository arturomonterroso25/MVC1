'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departamento extends Model {
    static associate(models) {
      departamento.belongsTo(models.tipo_usuarios,{
        foreignKey: "ID_Departamento",
      }); //pertenece a en la tabla hijo
    }
  };
  departamento.init({
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
    }
  }, {
    sequelize,
    modelName: 'departamentos'
  });
  return departamento;
};
