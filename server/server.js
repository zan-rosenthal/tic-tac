var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
// TODO: Add .env variables in deployment var dotenv = require('dotenv');
var cors = require ('cors');
var path = require('path');
var router = require('./routes');

var app = express();

//Detailed color-coded output
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Configure Views
var staticAssets = path.join(__dirname, './../dist');
app.use(express.static(staticAssets));

//Routing
app.use('/', router);

module.exports = app;
