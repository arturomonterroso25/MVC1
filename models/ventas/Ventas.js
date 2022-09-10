'use strict';
var Sequelize = require("sequelize");
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class venta extends Model {
        static associate(models) {
            venta.belongsTo(models.clientes, {
                foreignKey: "id_cliente",
            });
            venta.hasMany(models.productos, {
                foreignKey: "id_productos",
            });
        }
    };
    venta.init({
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        id_productos: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'ventas',
    });
    return venta;
};