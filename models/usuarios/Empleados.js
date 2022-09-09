
'use strict';
var Sequelize = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleado extends Model {
    static associate(models) {
      empleado.belongsTo(models.departamentos,{
        foreignKey: "ID_Departamento",
      });
    }
  };
  empleado.init({
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    DPI: 
    {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Telefono: { type: DataTypes.STRING, 
      allowNull: false 
    },
    ID_Departamento: 
    {  
      type: DataTypes.INTEGER, 
      allowNull: false}
  }, {
    sequelize,
    modelName: 'empleados',
  });
  return empleado;
};