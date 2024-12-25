import todoModel from "../models/todoModel.js";

export const getAllTodos = async (req,res) => {

    try{
        const todos = await todoModel.find();
        res.status(200).json(todos);
    }
    catch(error){
        res.status(500).json({message: "Ocurrió un error al obtener las tareas", error});
    }
};

export const getTodoById = async (req,res) => {

    try{
        const todo = await todoModel.findById(req.params.id);
        res.status(200).json(todo);


    }catch(error){
        res.status(404).json({message: "No se encontró la tarea"});
    }
};

export const createTodo = async (req,res) => {
    try{
        const newTodo = await todoModel.create(req.body);
        res.status(201).json(newTodo);
    } 
    catch(error) {
        res.status(400).json({message: "No se pudo crear la tarea"});
    }
};

export const updateTodo = async(req, res) => {
    try {
        const updatedTodo = await todoModel.findByIdAndUpdate(req.params.id, req.body,{ new: true });
        res.status(200).json(updatedTodo);
    } 
    catch(error) {
        res.status(404).json({message: "No se pudo actualizar la tarea"});
    }
};

export const checkTodo = async(req, res) => {
    try {
        const checkedTodo = await todoModel.findByIdAndUpdate(req.params.id, req.body,{ new: true });
        res.status(200).json(checkedTodo);
    } 
    catch(error) {
        res.status(404).json({message: "No se pudo cambiar estado a la tarea"});
    }
};

export const deleteTodo = async(req,res)=>{
    try {
        const result = await todoModel.findByIdAndDelete(req.params.id);
        if(!result){
            res.status(404).json({message:"No se encontró la tarea"});
            
        }
        else{
        res.send(`La tarea: "${result?.name}" fue eliminada`);
    }
    }catch(error){
        res.status(404).json({message:"Error al intentar borrar"});
    }
}


