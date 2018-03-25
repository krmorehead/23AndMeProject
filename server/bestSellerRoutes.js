let request = require('request-promise-native');
let utils = require('./utils');

const BESTSELLER_URL = 'http://api.nytimes.com/svc/books/v3/lists/overview.json?callback=foobar&api-key=';

module.exports = function(app){
  app.get('/bestSellers', getBestsellerList.bind(null, app));
};

/**
  Description:
    Uses the api key to get the best seller list from the best seller route

  Param {Object} app - The express session

  Returns {array} Returns an array of bestSellers
*/
let getBestsellerList = (app, req, res) => {
  return request(BESTSELLER_URL + process.env.BESTSELLER_API_KEY + 1)
    .then(utils.sendResponse.bind(null, res))
    .catch(utils.handleError.bind(null, res));
}