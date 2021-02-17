const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const middlewares = require('./middlewares');
const technicianEndpoints = require('./api/technicianEndpoints');
const customerendpoints = require('./api/customerEnpoints');


const app = express();

mongoose.connect('mongodb://localhost/mekodb', { useNewUrlParser:true, useUnifiedTopology:true, });

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,   
}));
app.use( express.json() );

app.get('/', (req, res) => {
    res.json({
        message: 'index route',
    });
});

app.use('/meko/api/v1/technicianendpoints', technicianEndpoints);
app.use('/meko/api/v1/customerendpoints', customerendpoints)


app.use( middlewares.notFound);

app.use( middlewares.errorhandler );

port = process.env.PORT || 1337

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});