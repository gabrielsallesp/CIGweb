const MaquinaModel = require('../model/MaquinaModel');
const { exists } = require('../model/MaquinaModel');

const MaquinaValidation = async (req, res, next) =>{

    const { nome, usuario, senha } = req.body;

    if(!nome)
        return res.status(400).json({ error: 'nome é obrigatório'});
    else if(!usuario)
        return res.status(400).json({ error: 'usuário obrigatório'});
    else if(!senha)
        return res.status(400).json({ error: 'senha obrigatória'});
    else{
        let exists;

        if(req.params.id){
            exists = await MaquinaModel.
                    findOne(
                        { '_id': {'$ne': req.params.id},
                          'nome': {'$in': nome}
                    });
        }else{
            exists = await MaquinaModel.
                    findOne(
                        {'nome': {'$in': nome}
                    });    
        }
            
        if(exists){
            return res.status(400).json({ error: 'maquininha já existe'});
        }
        
        next();
    }
}

module.exports = MaquinaValidation;