'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('proveedores', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nombre: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            telefono: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
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

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('proveedores');
    }
};