'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Proveedores', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type_paid: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    days: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
    
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('proveedores');
  }
};
