import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import todoRoutes from './routes/todoRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use(cors({
    origin: ['http://localhost:5173','http://127.0.0.1:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  }));

app.use('/api/todos', todoRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: 'Internal Server Error'});
});

export default app;