
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      /* usuario.belongsTo(models.tipo_usuarios, {
        foreignKey: "id_tipo_usuario",
      }); */
    }
  };
  /*NUEVO COMENTARIO */ 
  usuario.init({
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    precios: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
    /* id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    } */
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return usuario;
};