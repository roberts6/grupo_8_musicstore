const express = require ('express');
const router = express.Router();

const controlador = require('../controllers/productosController');


router.get('/', controlador.home);
router.get('/detalles', controlador.detalle);

module.exports = router;