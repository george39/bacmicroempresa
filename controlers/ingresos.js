'use strict'



var Ingresos = require('../models/ingresos');

/************************************************************
 GUARDAR UN INGRESO
*************************************************************/
function saveIngreso(req, res) {
    var ingreso = new Ingresos();
    var params = req.body;

    ingreso.registros = params.registros;

    ingreso.save((err, ingresoStored) => {
        if (err) {
            res.status(500).json({
                message: 'Error al guardar ingreso'
            });
        } else {
            if (!ingresoStored) {
                res.status(404).json({
                    mesagge: 'No se ha podido guardar el ingreso'
                });
            } else {

                res.status(200).json({
                    ingreso: ingresoStored
                });
            }
        }
    });

};


/************************************************************
 LISTAR LOS INGRESO
*************************************************************/
function getIngresos(req, res) {

    Ingresos.find({}).populate({ path: 'user_id' }).exec((err, ingresos) => {
        if (err) {
            res.status(500).json({
                message: 'Error en la peticion'
            });
        } else {
            if (!ingresos) {
                res.status(404).json({
                    message: 'No Existe la tarea'
                });
            } else {
                res.status(200).json({
                    ingresos
                });
            }
        }
    });


};


module.exports = {
    saveIngreso,
    getIngresos
};