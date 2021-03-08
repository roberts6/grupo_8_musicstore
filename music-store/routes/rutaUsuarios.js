const express = require ('express');
const router = express.Router ();
const multer = require ('multer');
const controlador = require('../controllers/productosController');

router.get('/login', controlador.login);

router.get('/registro', controlador.registro);

module.exports = router;