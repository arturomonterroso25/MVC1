'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('proveedores', {
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
      type: Sequelize.STRING
    }
    
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('proveedores');
  }
};

