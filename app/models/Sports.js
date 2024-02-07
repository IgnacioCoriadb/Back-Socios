const { DataTypes,UUIDV4  } = require('sequelize');
const sequelize = require('../../config/postgreSql');

const Sport = sequelize.define('Sport',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Sport;
