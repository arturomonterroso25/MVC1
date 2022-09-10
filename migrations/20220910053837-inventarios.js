'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('inventario', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            cantidad: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            producto: {
                type: Sequelize.STRING,
                allowNull: false
            },

            id_producto: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'productos',
                    key: 'id'
                }
            },
            categoria: {
                type: Sequelize.STRING,
                allowNull: false
            }
            ,
            tipo: {
                type: Sequelize.STRING,
                allowNull: false
            },
            
            descripcion: {
                type: Sequelize.STRING,
                allowNull: false
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('prodcutos');
    }
};