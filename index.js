const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorHandler = require('./app/middlewares/error');

const ordersRoutes = require('./app/routes/orders');

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', ordersRoutes);


app.use(errorHandler);

app.listen(8081, () => console.log('App is running on port 8081'));
