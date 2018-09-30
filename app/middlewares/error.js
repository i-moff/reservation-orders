const httpStatus = require('http-status');

module.exports = (err, req, res, next) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
  res.send(err.message);
  res.end();
};
