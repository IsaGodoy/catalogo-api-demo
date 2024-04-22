
import { Router } from 'express';
import { getAllProducts } from '../controllers/productos.controller.js';

const router = Router();

router.post('/consultar_listado_productos', getAllProducts);

export default router;