'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_de_la_apliccion_tienda';

exports.createToken = function(user) {
    var payload = {
        sub: user._id,
        name: user.name,
        email: user.email,
        role: user.role,

        iat: moment().unix(),
        exp: moment().add(60, 'days').unix

    };
    return jwt.encode(payload, secret);
};