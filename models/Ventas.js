'use strict';
const sequelize = require("sequelize");
var _ = require("sequelize");
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ventas extends Model {
        static associate(models) {  
        }
    };
    ventas.init({
        Producto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Cantidad:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        Descripcion:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Precio:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        Vendedor:{
            type: DataTypes.STRING,
            allowNull: false 
        },
        Fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },
        Total:{
            type: DataTypes.DOUBLE,
            allowNull: false
    }
}, 
        {
            sequelize,
            modelname: 'Ventas',
    });
    return ventas;
};