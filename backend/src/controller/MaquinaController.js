const MaquinaModel = require('../model/MaquinaModel');
const { response } = require('express');

class MaquinaController {
    
    async create(req, res){
        const maquina = new MaquinaModel(req.body);
        await maquina
                .save()
                .then(response => {
                    return res.status(200).json(response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                });
    }

    async update(req, res){
        await MaquinaModel.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async all(req, res){
        await MaquinaModel.find({ mostrar: {'$in': req.params.mostrar}})
                          .sort('created')
                          .then(response => {
                              return res.status(200).json(response);
                          })
                          .catch(error => {
                              return res.status(500).json(error);
                          });
    }

    async show(req, res){
        await MaquinaModel.findById(req.params.id)
                          .then(response => {
                              if(response)
                                return res.status(200).json(response);
                              else
                                return res.status(404).json({error: 'maquininha não encontrada'});
                          })
                          .catch(error => {
                              return res.status(500).json(error);
                          });
    }

    async delete(req, res){
        await MaquinaModel.deleteOne({'_id': req.params.id})
                          .then(response => {
                              return res.status(200).json(response);
                        })
                          .catch(error => {
                              return res.status(500).json(error);
                        });
    }

}

module.exports = new MaquinaController();