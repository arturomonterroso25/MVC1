'use strict';
var sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes)=>{
    class tipo_cliente extends Model{
    };
    tipo_cliente.init({
        Nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull:false
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull:false
        }
    },
    {
        sequelize,
        modelName:'tipo_clientes'
    });
    return tipo_cliente;
};