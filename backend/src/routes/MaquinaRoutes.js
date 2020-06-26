const express = require('express');
const router = express.Router();

const MaquinaController = require('../controller/MaquinaController');
const MaquinaValidation = require('../middlewares/MaquinaValidation');

router.post('/', MaquinaValidation, MaquinaController.create);
router.put('/:id', MaquinaValidation, MaquinaController.update);
router.delete('/:id', MaquinaController.delete);

router.get('/:id', MaquinaController.show);
router.get('/filter/all/:mostrar', MaquinaController.all);

module.exports = router;