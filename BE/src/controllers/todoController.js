import todoModel from "../models/todoModel.js";
import mongoose from "mongoose";

export const getAllTodos = async (req, res) => {

    try {
        const todos = await todoModel.find();
        
        res.status(200).json(todos);
    }
    catch (error) {
        res.status(500).json({ message: "Ocurrió un error al obtener las tareas", error });
    }
};

export const getTodoById = async (req, res) => {

    if (!req.params.id) {
        return res.status(400).json({ message: "Se debe especificar un ID" });
    }
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "El ID brindado no es válido" });
    }

    try {
        const todo = await todoModel.findById(req.params.id);

        if (!todo) {
            return res.status(404).json({ message: "No se encontró tarea con el ID brindado" });
        }

        res.status(200).json(todo);


    } catch (error) {
        res.status(404).json({ message: "No se pudo encontrar la tarea" });
    }
};

export const createTodo = async (req, res) => {

    if (!req.body) {
        return res.status(400).json({ message: "No se cargaron datos básicos de la tarea" });
    }

    try {
        const newTodo = await todoModel.create(req.body);
        console.log("Tarea nueva " , newTodo)
        res.status(201).json(newTodo);
    }
    catch (error) {
        res.status(400).json({ message: "No se pudo crear la tarea" });
    }
};

export const updateTodo = async (req, res) => {

    if (!req.params.id) {
        return res.status(400).json({ message: "Se debe especificar un ID" });
    }
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "El ID brindado no es válido" });
    }

    try {
        const updatedTodo = await todoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedTodo) {
            return res.status(404).json({ message: "No se encontró la tarea con el ID brindado" });
        }

        res.status(200).json(updatedTodo);
    }
    catch (error) {
        res.status(500).json({ message: "No se pudo actualizar la tarea" });
    }
};

export const checkTodo = async (req, res) => {

    if (!req.params.id) {
        return res.status(400).json({ message: "Se debe especificar un ID" });
    }
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "El ID brindado no es válido" });
    }

    try {
        const checkedTodo = await todoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!checkedTodo) {
            return res.status(404).json({ message: "No se encontró la tarea con el ID brindado" });
        }

        res.status(200).json(checkedTodo);
    }
    catch (error) {
        res.status(404).json({ message: "No se pudo cambiar estado a la tarea" });
    }
};

export const deleteTodo = async (req, res) => {

    if (!req.params.id) {
        return res.status(400).json({ message: "Se debe brindar un ID a eliminar" });
    }
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "El ID brindado no es válido" });
    }

    try {
        const result = await todoModel.findByIdAndDelete(req.params.id);
        if (!result) {
           return res.status(404).json({ message: "No se encontró la tarea a eliminar" });

        }
        
        res.status(200).json({message: `La tarea: '${result?.name}' fue eliminada`});
        
    } catch (error) {
        res.status(404).json({ message: "Error al intentar borrar" });
    }
}


