
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_usuario extends Model {
    static associate(models) {
      tipo_usuario.hasMany(models.usuarios,{
        foreignKey: "id_tipo_usuario",
      }); //Tiene muchos en la tabla padre
    }
  };
  tipo_usuario.init({
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
    modelName: 'tipo_usuarios',
  });
  return tipo_usuario;
};