const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var usuarioSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    numTelefono: { type: Number },
    interes: { type: String, required: [true, 'Seleccione una de las opciones'] },
    compania: { type: String, required: [true, 'El nombre de su compañia es necesario'] },
    email: { type: String, require: [true, 'El email es necesario'] },

});

module.exports = mongoose.model('Usuario', usuarioSchema);