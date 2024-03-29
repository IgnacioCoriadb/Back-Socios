const { DataTypes,UUIDV4  } = require('sequelize');
const sequelize = require('../../config/postgreSql');
const Person = require('./Person');

const Membership = sequelize.define('Membership',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
      },
    //Si esta al día con la cuota será true sino false
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },//ultimo pago 
    lastPayment:{
        type: DataTypes.DATE,
        allowNull: true
    },
});

Membership.belongsTo(Person, {
    foreignKey: 'personId',
    allowNull: false
  });
  
module.exports = Membership;
