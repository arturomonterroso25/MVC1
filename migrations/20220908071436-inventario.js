'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('inventarios', {
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
    cant: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE
    }
    
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('inventarios');
  }
};
