const { DataTypes,UUIDV4  } = require('sequelize');
const sequelize = require('../../config/postgreSql');


const Person = sequelize.define('Person',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth:{
        type: DataTypes.DATE,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone :{
        type: DataTypes.STRING,
        allowNull: false
    },
    DNI:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = Person;
