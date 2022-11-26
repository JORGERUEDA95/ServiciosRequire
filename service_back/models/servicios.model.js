const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    servicio: { type: String, required: true, max:60 },
    nombre_tec: { type: String, required: true, max:40 },
    apellido_tec: { type: String, required: true, max:40 },
    telefono_tec: { type: String, required: true, max:15 },
    email_tec: { type: String, required: true, max:70 }
   

});
 module.exports = mongoose.model('servicios', ServiceSchema);