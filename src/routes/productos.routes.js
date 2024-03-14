import { Router } from "express";
import { crearProducto, editarProducto, listarProductos, obtenerProducto } from "../controllers/productos.controllers.js";

const router = Router();

router.route('/productos').get(listarProductos).post(crearProducto)
router.route('/productos/:id').get(obtenerProducto)
router.route('/productos/:id').put(editarProducto)

export default router;