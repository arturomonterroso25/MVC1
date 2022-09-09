'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      usuario.belongsTo(models.tipo_usuarios,{
        foreignKey: "ID_Tipo",
      }); //pertenece a en la tabla hijo
    }
  };
  usuario.init({
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ID_Tipo:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'usuarios'
  });
  return usuario;
};
