const Servicio = require('../models/servicios.model');

let response = {
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let servicio = new Servicio({
        servicio: req.body.servicio,
        nombre_tec: req.body.nombre_tec,
        apellido_tec: req.body.apellido_tec,
        telefono_tec: req.body.telefono_tec,
        email_tec: req.body.email_tec
    })

    servicio.save(function(err){
        if (err) {
            console.log = false,
                response.exito = false,
                response.msg = "Error al guardar el servicio"
            res.json(response)
            return;
        }

          response.exito = true,
          response.msg = "El servicio se guardó correctamente"
          res.json(response)
    })

}

exports.find = function(req,res){
    Servicio.find(function(err, servicios){
        res.json(servicios)
    })
}
exports.findOne = function(req,res) {
    Servicio.findOne({_id: req.params.id},function (err, servicio) {
        res.json(servicio)
    })
}
exports.update = function(req,res) {
    let servicio = {
        servicio: req.body.servicio,
        nombre_tec: req.body.nombre_tec,
        apellido_tec: req.body.apellido_tec,
        telefono_tec: req.body.telefono_tec,
        email_tec: req.body.email_tec
    }
    Servicio.findByIdAndUpdate(req.params.id, {$set: servicio}, function(err) {
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el servicio"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El servicio se modificó correctamente"
        res.json(response)
    })
}

exports.remove = function(req, res) {
    Servicio.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
            response.exito = false,
            response.msg = "Error al eliminar el servicio"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El servicio se ha eliminado correctamente"
        res.json(response)
    })
}