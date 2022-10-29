'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('ventas', {

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
            total: {
                type: Sequelize.DECIMAL,
                allowNull: false
            },
            id_productos: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'productos',
                    key: 'id'
                }
            },
            id_cliente: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'clientes',
                    key: 'id'
                }
            },
            id_usuarios: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'usuarios',
                    key: 'id'
                }
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
        await queryInterface.dropTable('ventas');
    }
};