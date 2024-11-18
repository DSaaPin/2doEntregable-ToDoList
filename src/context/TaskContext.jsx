import { createContext,useContext, useReducer,useEffect } from "react";
//no usaré axios por ahora

const TasksContext = createContext();

const tasksReducer = (state, action) => {
    switch(action.type){
        case "SET_TASKS":
            return action.payload;
        case "ADD_TASK":
            return [...state,action.payload];
        case "DELETE_TASK":
            return state.filter((task) => task.id !== action.payload);
        case "UPDATE_TASK":
            return state.map((task) =>
            task.id === action.payload.id ? action.payload : task);
        default:
            return state;
    }
};

export const TasksProvider = ({children}) => {
    const [tasks, dispatch] = useReducer(tasksReducer,[]);

    const todosURL = "http://localhost:3000/todos";

    useEffect(() => {
        const fetchTasks = async () => {
            try{
                const response = await fetch(todosURL, {method: "GET"});
                if(!response.ok){
                    console.log ("Error al buscar datos");
                }
                
                const data = await response.json();
                dispatch({type: "SET_TASKS", payload: data});

            }catch(error){
                console.error("Error al traer lista: ", error)
            }
        }
        fetchTasks();
    },[]);

    const addTask = async (task) => {
        try{
            const response = await fetch(todosURL,{method:"POST", headers:{"Content-Type" : "application/json",},
            body: JSON.stringify(task),
        });

        if (!response.ok){
            console.log("Error");
        }
            const data = await response.json();
                
            dispatch({type:"ADD_TASK", payload: data});
        }
        catch(error){
            console.error("Error al agregar tarea: ",error)
        };
    };

    //const deleteTask = asyn ()


    
  return (
    <TasksContext.Provider value={{ tasks, addTask}}>{/*, deleteTask, updateTask  */}
      {children}
    </TasksContext.Provider>
  );


};

export const useTasks = () => useContext(TasksContext);