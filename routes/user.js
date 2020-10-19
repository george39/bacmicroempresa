'use strict'


var express = require('express');
var userController = require('../controlers/user');

var api = express.Router();

api.post('/save-user', userController.saveUser);
api.put('/update-user', userController.updateUser);
api.put('/login', userController.login);


module.exports = api;