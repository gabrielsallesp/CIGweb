const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const DadosSchema = new Schema({
    data_venda: {type: String, required: true},
    operadora: {type: String, required: true},
    bandeira_cartao: {type: String, required: true},
    tipo_transacao: {type: String, required: true},
    valor_venda: {type: String, required: true},
    local_estabelecimento: {type: String, required: true},
});


module.exports = mongoose.model('dados', DadosSchema);
