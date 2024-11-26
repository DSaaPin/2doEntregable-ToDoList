import { useState, useEffect } from "react";
import ToDoList from "../components/ToDoList";

const ToDoListPage = () => {
    return (<>
        <h2>Lista de tareas</h2>
        <div>
            <ToDoList/>
        </div>
        </>
    );
};

export default ToDoListPage 