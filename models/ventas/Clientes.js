'use strict';
var Sequelize = require("sequelize");
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class cliente extends Model {
        static associate(models) {
            cliente.hasMany(models.ventas, {
                foreignKey: "id_cliente",
            });
            
        }
    };
    cliente.init({
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nit: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'clientes',
    });
    return cliente;
};