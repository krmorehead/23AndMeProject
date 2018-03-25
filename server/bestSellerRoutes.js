var request = require('request');

module.exports = function(app){
  app.get('/bestSellers', getBestsellerList.bind(null, app));
}

/**
  Description:
    Uses the api key to get the best seller list from the best seller route

  Param {Object} app - The express session

  Returns {array} Returns an array of bestSellers
*/
function getBestsellerList(app, req, res) {
  res.send({
    message: 'success'
  })
}