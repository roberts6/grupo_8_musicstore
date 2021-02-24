const express = require ('express');
const router = express.Router();

const controlador = require('../controllers/productosController');

router.get('/guitarradetalle/:idProducto?', controlador.guitarradetalle);
router.get('/bajosdetalle/:idProducto?', controlador.bajosdetalle);
router.get('/bateriasdetalle/:idProducto?', controlador.bateriasdetalle);
router.get('/audio', controlador.audio);
router.get('/cargaProductos', controlador.cargaProducto);
router.post('/cargaProductos', controlador.productoNuevo);

module.exports = router;