import express from 'express';
import {
    getAllTodos
} from '../controllers/todoController.js';


const router = express.Router();

router.get('/', getAllTodos);

export default router;