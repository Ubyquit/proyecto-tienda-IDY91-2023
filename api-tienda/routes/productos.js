const express = require('express');
const productosController = require('../controllers/productosController');

const router = express.Router();

// Rutas para los Productos
router.get('/', productosController.obtenerProductos);
router.post('/', productosController.agregarProducto);
router.delete('/:id_producto', productosController.eliminarProducto);
router.put('/:id_producto', productosController.actualizarProducto);

module.exports = router;
