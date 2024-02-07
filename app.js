require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {client, connectDb} = require('./config/postgreSql');


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
connectDb();

app.listen(PORT, ()=>{
    console.log('APP Running on port ' + PORT);
})