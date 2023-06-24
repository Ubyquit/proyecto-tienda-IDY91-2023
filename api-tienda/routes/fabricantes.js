const express = require('express');
const fabricantesController = require('../controllers/fabricantesController');

const router = express.Router();

// Rutas para los fabricantes
router.get('/', fabricantesController.obtenerFabricantes);
router.post('/', fabricantesController.agregarFabricante);
router.delete('/:id_fabricante', fabricantesController.eliminarFabricante);
router.put('/:id_fabricante', fabricantesController.actualizarFabricante);

module.exports = router;
