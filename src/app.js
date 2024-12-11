const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

const routes = require('./routes');
app.use('/', routes);

module.exports = app;