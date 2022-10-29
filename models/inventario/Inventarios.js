'use strict';
var Sequelize = require("sequelize");
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class inventario extends Model {
        static associate(models) {
            inventario.hasMany(models.productos, {
                foreignKey: "id_producto",
            });
        }
    };
    inventario.init({
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        producto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_producto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'inventarios',
    });
    return inventario;
};