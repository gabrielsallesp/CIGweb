const express = require('express');
const router = express.Router();

const DadosController = require('../controller/DadosController');

router.post('/', DadosController.create);
router.get('/all', DadosController.all);
router.get('/transacao', DadosController.transacao);

module.exports = router;