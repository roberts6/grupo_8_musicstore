const express = require ('express');
const router = express.Router();

const controlador = require('../controllers/productosController');


router.get('/', controlador.home);
router.get('/guitarradetalle', controlador.guitarradetalle);
router.get('/bajosdetalle', controlador.bajosdetalle);
router.get('/bateriasdetalle', controlador.bateriasdetalle);
router.get('/login', controlador.login);
router.get('/audio', controlador.audio);
router.get('/cargaProductos', controlador.cargaProducto);

module.exports = router;