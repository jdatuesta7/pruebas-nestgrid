import express from 'express';
import { createItem, updateItem } from '../controllers/boards.js';

const router = express.Router();

router.post('/', createItem);
router.put('/:id', updateItem);

export default router;