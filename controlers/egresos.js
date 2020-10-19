'use strict'

var Egresos = require('../models/egresos');


/************************************************************
 REGISTRAR EGRESOS
*************************************************************/
function saveEgresos(req, res) {

    var egresos = new Egresos();
    var params = req.body;

    egresos.registros = params.registros;



    egresos.save((err, egresosStored) => {
        if (err) {
            res.status(500).json({
                message: 'Error en el servidor'
            });
        } else {
            if (!egresosStored) {
                res.status(404).json({
                    message: 'No se ha podido guardar los registros'
                });
            } else {
                res.status(200).json({
                    egresos: egresosStored
                });

            }
        }
    });
};


/************************************************************
 LISTAR LOS EGRESOS
*************************************************************/
function getEgresos(req, res) {

    Egresos.find({}).populate({ path: 'user_id' }).exec((err, egreso) => {
        if (err) {
            res.status(500).json({
                message: 'Error en la peticion'
            });
        } else {
            if (!egreso) {
                res.status(404).json({
                    message: 'No Existe la tarea'
                });
            } else {
                res.status(200).json({
                    egreso
                });
            }
        }
    });


};


/************************************************************
 LISTAR EGRESOS POR ID
*************************************************************/
function getEgreso(req, res) {

    var egresoId = req.params.id

    Egresos.findById(egresoId).populate({ path: 'user_id' }).exec((err, egreso) => {
        if (err) {
            res.status(500).json({
                message: 'Errar en la peticion'
            });
        } else {
            if (!egreso) {
                res.status(404).json({
                    message: 'El registro no existe'
                });
            } else {

                res.status(200).json({
                    egreso
                });
            }
        }
    });
};


/************************************************************
 ACTUALIZAR UN EGRESO
*************************************************************/
function updateEgreso(req, res) {

    var egresoId = req.params.id;

    var update = req.body;

    Egresos.findByIdAndUpdate(egresoId, update, (err, egreso) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error al buscar egreso',
                errors: err
            });
        } else {
            if (!egreso) {
                res.status(404).json({
                    message: 'El registro no existe'
                });
            } else {

                res.status(200).json({
                    egreso
                });
            }
        }
    });
}



/************************************************************
 ELIMINAR UN EGRESO
*************************************************************/
function deleteEgreso(req, res) {

    var egresoId = req.params.id;

    Egresos.findByIdAndRemove(egresoId, (err, egresoDeleted) => {
        if (err) {
            res.status(500).json({
                message: 'Error en la peticion'
            });
        } else {
            if (!egresoDeleted) {
                res.status(404).json({
                    message: 'No existe el registro'
                });
            } else {
                res.status(200).json({
                    egreso: egresoDeleted
                });
            }
        }
    });

};

module.exports = {
    saveEgresos,
    getEgresos,
    getEgreso,
    updateEgreso,
    deleteEgreso
}