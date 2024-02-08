require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/postgreSql'); 
const Person = require('./app/models/Person');
const Membership = require('./app/models/Membership');
const PersonSport = require('./app/models/PersonSport');
const routes = require("./app/routes/index");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/', routes);

sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

app.listen(PORT, ()=>{
    console.log('APP Running on port ' + PORT);
})