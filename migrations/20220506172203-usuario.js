'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      ID_Usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ID_Tipo: {
        type: Sequelize.INTEGER,
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
/*       id_tipo_usuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'tipo_usuarios',
            key: 'id'
        }
      }, */
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};
