'use strict'

var express = require('express')
var api = express.Router();

var EgresosController = require('../controlers/egresos');

api.post('/save-egresos', EgresosController.saveEgresos);
api.get('/get-egresos', EgresosController.getEgresos);
api.get('/get-egreso/:id', EgresosController.getEgreso);
api.put('/update-egreso/:id', EgresosController.updateEgreso);
api.delete('/delete-egreso/:id', EgresosController.deleteEgreso);

module.exports = api;