import express from 'express';
import {
  addUser,
  deleteUser,
  getAllUsers,
  updatedUser,
} from '../controllers/UserController.mjs';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/users', addUser);
router.put('/users/:id', updatedUser);
router.delete('/users/:id', deleteUser);

export default router
