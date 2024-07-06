import express from 'express';
import { userService } from '../3-capa negocio (Services)/user.Service.js';

const router = express.Router();

router.get('/', (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = userService.getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

export { router as userController };