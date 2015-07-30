'use strict';

var fs = require('fs');

function handleError (res, err) {
  return res.status(500).send(err);
}

/**
 * Get list of Test
 *
 * @param req
 * @param res
 */
exports.index = function (req, res) {
  var data = req.body.data;
  var otherData = req.body.otherData;
  console.log(data);
  console.log(otherData);
  res.send(data + ' ' + otherData);
};
