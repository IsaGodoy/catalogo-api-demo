
import express from 'express';
import productosRoutes from './routes/productos.routes.js';
import './config.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(productosRoutes);

app.listen(PORT);

console.log(`Server running on port ${PORT}`);