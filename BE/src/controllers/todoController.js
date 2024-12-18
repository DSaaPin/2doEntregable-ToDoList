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



