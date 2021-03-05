const express = require ('express');
const router = express.Router();
const multer = require ('multer');

const controlador = require('../controllers/productosController');

router.get('/guitarradetalle/:idProducto?', controlador.guitarradetalle); /* vista listado guitarras */
router.get('/bajosdetalle/:idProducto?', controlador.bajosdetalle); /* vista listado bajos */
router.get('/bateriasdetalle/:idProducto?', controlador.bateriasdetalle); /* vista listado baterías */
router.get('/audio', controlador.audio); /* vista listado audio */
router.get('/create', controlador.cargaProducto); /* vista carga de productos */
router.post('/create', controlador.create); /* vista producto creado */
/* router.get('/edit/:idProducto', controlador.edit); /* vista edición producto */
/* router.post('/edit/:idProducto', controlador.actualizado); /* vista actualización del producto */ 

let multerDiskStorage = multer.diskStorage ({
    destination: (req,file, cb) => {
        cb(null, '../public/views/productoNuevo');
    },
    filename: (req,file, cb) => {
        cb(null, '${Date.now()}_img_${path.extname(file.originalname)}');
    }
})

/* const uploadFile = multer({ storage });  debería funcionar pero me da un error */

module.exports = router;