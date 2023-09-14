import express from 'express';
import { getProperties } from '../controllers/controller.js';

const router = express.Router();

router.get('/properties', getProperties);

export default router;