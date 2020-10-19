'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: { type: String, required: [true, 'El nombre es obligatorio'] },
    email: { type: String, unique: true, required: [true, 'El email es obligatorio'] },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },
    date: { type: Date, default: Date.now() },
    role: { type: String, required: true, default: 'ADMIN_ROLE' }
});


module.exports = mongoose.model('User', UserSchema);