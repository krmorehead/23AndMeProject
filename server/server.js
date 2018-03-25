let express = require('express');
let cors = require('cors');
let session = require('express-session');
let bodyParser = require('body-parser');

require('dotenv').config();

let PORT = process.env.PORT || 8001;

let app = express();
app.use(bodyParser.json());

app.use(cors());

console.log(`${__dirname}/../client`);
app.use(express.static(__dirname+"/../client"));

require('./bestSellerRoutes')(app);

console.log(`App listening on port ${PORT}`);
app.listen(PORT, process.env.HOST || 'localhost');

module.exports = app;