'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('clientes', {

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
            direccion: {
                type: Sequelize.DECIMAL,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            telefono: {
                type: Sequelize.STRING,
                allowNull: false
            },
            nit: {
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
        await queryInterface.dropTable('clientes');
    }
};