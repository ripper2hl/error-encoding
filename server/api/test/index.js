'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./test.controller');

router.post('/', controller.index);

module.exports = router;
