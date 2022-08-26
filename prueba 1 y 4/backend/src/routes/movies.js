import express from 'express';
import { getMovieTitles } from '../controllers/movies.js';

const router = express.Router();

router.get('/:substr/page/:pageNumber?', getMovieTitles);

export default router;