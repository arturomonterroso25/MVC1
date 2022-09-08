'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('compras', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
     product: {
      type: Sequelize.STRING,
      allowNull: false
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cant: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    total: {
      allowNull: false,
      type: Sequelize.DECIMAL
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE
    }
    
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('compras');
  }
};

