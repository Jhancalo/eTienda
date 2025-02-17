// routes para consumir el modulo productos del SERVICIO
const express = require("express");

const router = express.Router();

// instanciamos el controlador  correspondiente
const productoCrt = require("../controllers/productos.js");

// rutas que entregara el modulo producto
router.post("/productos/nuevo", productoCrt.setProducto);
router.get("/productos/listartodos", productoCrt.getProductos);
router.get("/productos/buscarxid/:id", productoCrt.searchById);
router.put("/productos/actualizar/:id", productoCrt.updateProducto);
router.delete("/productos/borrarxid/:id", productoCrt.deleteById);

module.exports = router;