
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
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dpi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    edad: {
        type: DataTypes.STRING,
        allowNull: false
      },
    /* id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    } */
  }, {
    sequelize,
    modelName: 'empleado',
  });
  return usuario;
};