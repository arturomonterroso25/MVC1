'use strict';

module.exports = {
up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('productos', {
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
     date_exp: {
      type: Sequelize.DATE,
      allowNull: false
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: false
    },
    cost: {
      allowNull: false,
      type: Sequelize.DECIMAL
    }
    
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('productos');
  }
};

