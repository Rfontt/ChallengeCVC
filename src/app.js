const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const Routers = require('./routers/RouterMain');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(Routers);

module.exports = app;
