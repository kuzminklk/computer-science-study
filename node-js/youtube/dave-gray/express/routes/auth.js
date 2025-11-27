
import express from 'express';
import handleUserAuth from '../controllers/authController.js';

const router = express.Router();

router.post('/', handleUserAuth);

export default router