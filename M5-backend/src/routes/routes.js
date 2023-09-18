import express from 'express';
import { getProperties, filterProperties } from '../controllers/controller.js';

const router = express.Router();

router.get('/properties', getProperties);
router.post('/filter',filterProperties)

export default router;