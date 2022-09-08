'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('empleados', {
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
    CUI: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date_birth: {
      allowNull: false,
      type: Sequelize.DATE
    },
    phone: {
      allowNull: false,
      type: Sequelize.STRING 
    },
    market_stall: {
      allowNull: false,
      type: Sequelize.STRING 
    }
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('empleados');
  }
};