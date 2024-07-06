import express from 'express';
import { userController } from './4-presentacion (controlador)/userController.js';
import { logger } from './5-infraestructura (mensajes logs)/logger.js';

const app = express();
const port = 3000;

app.use('/users', userController);

app.listen(port, () => {
  logger.log(`Server running on port ${port}`);
});