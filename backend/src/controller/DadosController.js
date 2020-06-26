const DadosModel = require('../model/DadosModel');
const { response } = require('express');

class DadosController {
    
    async create(req, res){
        const dados = new DadosModel(req.body);
        await dados
                .save()
                .then(response => {
                    return res.status(200).json(response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                });
    }

    async all(req, res){
        await DadosModel.find({}, {data_venda : 1, operadora : 1, bandeira_cartao : 1, tipo_transacao : 1, valor_venda : 1, local_estabelecimento : 1})
                          .then(response => {
                              return res.status(200).json(response);
                          })
                          .catch(error => {
                              return res.status(500).json(error);
                          });           
    }

    async transacao(req, res){
        await DadosModel.find({}, {tipo_transacao : 1})
                          .then(response => {
                              return res.status(200).json(response);
                          })
                          .catch(error => {
                              return res.status(500).json(error);
                          });  
    }

}

module.exports = new DadosController();