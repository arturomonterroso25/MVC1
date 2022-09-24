'use strict';
var Sequelize = require("sequelize");
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class producto extends Model {
        static associate(models) {
            producto.belongsTo(models.inventarios, {
                foreignKey: "id_producto",
            });
            producto.hasMany(models.ventas, {
                foreignKey: "id_productos",
            });
            producto.hasMany(models.compras, {
                foreignKey: "id_productos",
            });
        }
    };
    producto.init({
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'productos',
    });
    return producto;
};