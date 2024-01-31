const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { renderDashboard, createOrder } = require('./controllers/paymentController');
require('dotenv').config();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', renderDashboard);
app.post('/createOrder', createOrder);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
