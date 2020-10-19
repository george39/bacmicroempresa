'use strict'

var express = require('express');
var api = express.Router();
var IngresosController = require('../controlers/ingresos');


api.post('/save-ingresos', IngresosController.saveIngreso);
api.get('/get-ingresos', IngresosController.getIngresos);


module.exports = api;