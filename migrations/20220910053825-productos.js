'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('productos', {

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
            precio: {
                type: Sequelize.DECIMAL,
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