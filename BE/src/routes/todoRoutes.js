import express from 'express';
import {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    checkTodo,
    deleteTodo
} from '../controllers/todoController.js';
import { authToken } from '../middlewares/authMiddleware.js';


const router = express.Router();

router.use(authToken)
router.get('/', getAllTodos);
router.get('/:id', getTodoById);

router.post('/', createTodo);

router.put('/:id', updateTodo);

router.delete('/:id',deleteTodo)

router.patch('/:id', checkTodo);


router.use((req, res) => {
    res.status(404).json({ message: "Verifique la ruta brindada" });
});

export default router;