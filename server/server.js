var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session')
var bodyParser = require('body-parser');

require('dotenv').config()

var PORT = process.env.PORT || 8001;

var app = express();
app.use(bodyParser.json());

app.use(cors());

console.log(`${__dirname}/../client`)
app.use(express.static(__dirname+"/../client"));

require('./bestSellerRoutes')(app);

console.log(`App listening on port ${PORT}`)
app.listen(PORT)

module.exports = app;