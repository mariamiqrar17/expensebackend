// const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
//const connectDB = require('./config/db');
const {Mongoose} = require('./config/db')
const cors = require('cors')

dotenv.config({ path: './config/config.env' });
Mongoose();

//connectDB();

const transactions = require('./routes/transactions');

const app = express();
app.use(cors())
app.use(express.json());

app.use('/api/v1/transactions', transactions);
app.get('/',(req,res)=>{
    res.send("Hello There!")
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
