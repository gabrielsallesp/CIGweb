const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const MaquinaSchema = new Schema({
    mostrar: {type: Boolean, default: true},
    nome: {type: String, required: true},
    usuario: {type: String, required:true},
    senha: {type: String, required:true},
    created: {type: Date, default: Date.now()}
});


module.exports = mongoose.model('Maquininhas', MaquinaSchema);
