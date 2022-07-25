require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productR = require('./routes/productRoute');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/products', productR);

app.listen(process.env.PORT, ()=>{
    console.log('RUNNING');
})