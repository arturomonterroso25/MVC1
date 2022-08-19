const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('Cliente', {
// Los atributos del modelo se definen aquí
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    
// allowNull por defecto es verdadero
  }
}, {
  
// Otras opciones de modelo van aquí
});


// `sequelize.define` también devuelve el modelo
console.log(User === sequelize.models.User); // verdadero