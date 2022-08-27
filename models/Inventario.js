
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
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cantidad: {
      type: DataTypes.STRING,
      allowNull: false
    },
    producto: {
        type: DataTypes.STRING,
        allowNull: false
      },
    /* id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    } */
  }, {
    sequelize,
    modelName: 'inventario',
  });
  return usuario;
};