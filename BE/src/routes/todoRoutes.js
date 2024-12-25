import express from 'express';
import {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    checkTodo,
    deleteTodo
} from '../controllers/todoController.js';


const router = express.Router();

router.get('/', getAllTodos);
router.get('/:id', getTodoById);

router.post('/', createTodo);

router.put('/:id', updateTodo);

router.delete('/:id',deleteTodo)

router.patch('/:id', checkTodo);

export default router;