'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('compras', {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            id_proveedor: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'proveedores',
                    key: 'id'
                }
            },
            id_productos: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'productos',
                    key: 'id'
                }
            },
            cantidad: {
                type: Sequelize.INTEGER,
                allowNull: false
            },

            total: {
                type: Sequelize.DECIMAL,
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

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('compras');
    }
};