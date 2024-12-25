import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const TasksContext = createContext();

const tasksReducer = (state, action) => {
    switch (action.type) {
        case "SET_TASKS":
            return action.payload;
        case "ADD_TASK":
            return [...state, action.payload];
        case "DELETE_TASK":
            return state.filter((task) => task._id !== action.payload);
        case "UPDATE_TASK":
            return state.map((task) =>
                task._id === action.payload._id ? action.payload : task);
        case "CHECK_TASK":
            return state.map((task) =>
                task._id === action.payload._id ? { ...task, isCompleted: action.payload.isCompleted } : task);
        default:
            return state;
    }
};

export const TasksProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    const todosURL = "http://localhost:3000/api/todos";

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(todosURL);

                dispatch({ type: "SET_TASKS", payload: response.data });

            } catch (error) {
                console.error("Error al traer lista: ", error)
            }
        }
        fetchTasks();
    }, []);

    const addTask = async (task) => {
        try {
            const response = await axios.post(todosURL, task)

            dispatch({ type: "ADD_TASK", payload: response.data });
        }
        catch (error) {
            console.error("Error al agregar tarea: ", error)
        };
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${todosURL}/${id}`);
            dispatch({ type: "DELETE_TASK", payload: id });
        } catch (error) {
            console.log("Error al eliminar tarea: ", error)
        }
    };

    const updateTask = async (id, updatedTask) => {
        try {
            const response = await axios.put(todosURL + `/${id}`, updatedTask
            );
            dispatch({ type: "UPDATE_TASK", payload: response.data });
        } catch (error) {
            console.error("Error al actualizar tarea: ", error);
        }
    };

    const checkTask = async (id, isCompleted) => {
        try {
            const response = await axios.patch(todosURL + `/${id}`, { isCompleted }
            );
            dispatch({ type: "CHECK_TASK", payload: response.data });
        } catch (error) {
            console.error("Error al marcar tarea: ", error);
        }
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, deleteTask, updateTask, checkTask }}>
            {children}
        </TasksContext.Provider>
    );


};

export const useTasks = () => useContext(TasksContext);