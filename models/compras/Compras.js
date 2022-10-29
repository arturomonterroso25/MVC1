'use strict';
var Sequelize = require("sequelize");
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class compra extends Model {
        static associate(models) {
            compra.belongsTo(models.proveedores, {
                foreignKey: "id_proveedor",
            });
            compra.hasMany(models.productos, {
                foreignKey: "id_productos",
            });

        }
    };
    compra.init({

        id_proveedor: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        producto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        id_productos: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'compras',
    });
    return compra;
};