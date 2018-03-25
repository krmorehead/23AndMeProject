/**
  Description:
    Sends a standard response from a request

  Param {Object} res - an express resonse object
  Param {Object || Array} - The response data from some sort of call
*/
function sendResponse(res, data) {
  res.send({
    data: data
  });
}

module.exports = {
  sendResponse: sendResponse
};
