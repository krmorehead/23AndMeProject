/**
  Description:
    Sends a standard response from a request

  Param {Object} res - an express resonse object
  Param {Object || Array} - The response data from some sort of call
*/
let sendResponse = (res, data) => {
  res.send({
    data: data
  });
}

/**
  Description:
    Sends a standard error from a request

  Param {Object} res - an express resonse object
  Param {Object} - An error object to be used for information to pass along.
*/
let handleError = (res, err) => {
  res.statusCode = err.statusCode;
  res.statusMessage =  err.message;
  res.send({
    data: err
  })
}

module.exports = {
  sendResponse: sendResponse,
  handleError: handleError
};
