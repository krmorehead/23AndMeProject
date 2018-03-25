let express = require('express');
let cors = require('cors');
let session = require('express-session');
let bodyParser = require('body-parser');

require('dotenv').config();

let PORT = process.env.PORT || 3000;

let app = express();
app.use(bodyParser.json());

app.use(cors());

console.log(`${__dirname}/../client`);
app.use(express.static(__dirname+"/../client"));

require('./bestSellerRoutes')(app);

app.get('/', function (req, res) {
    res.send('Hello Digital Ocean!')
});

console.log(`App listening on port ${PORT}`);
app.listen(PORT);

module.exports = app;