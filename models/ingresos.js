'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var IngresosSchema = Schema({
    fecha: { type: Date, default: Date.now() },
    registros: { type: Array }
});


module.exports = mongoose.model('Ingreso', IngresosSchema);