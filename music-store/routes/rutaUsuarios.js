const express = require ('express');
const router = express.Router ();
const controlador = require('../controllers/productosController');

router.get('/login', controlador.login);

module.exports = router;