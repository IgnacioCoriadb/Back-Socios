const { DataTypes,UUIDV4  } = require('sequelize');
const sequelize = require('../../config/postgreSql');
const Sport = require("./Sports");
const Person =require("./Person");

const PersonSport = sequelize.define('PersonSport',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
      },
      status:{
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
});

Person.belongsToMany(Sport, { through: 'PersonSport' });
Sport.belongsToMany(Person, { through: 'PersonSport' });

module.exports = PersonSport;
