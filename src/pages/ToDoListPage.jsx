import { useState, useEffect } from "react";
import ToDoList from "../components/ToDoList";

//import axios from "axios";
//import ProductList from "../components/productList";

const ToDoListPage = () => {
    return (<>{/*CORREGIR LUEGO COMO HICIMOS EN CLASE JUEVES */}
        <h2>Lista de tareas</h2>
        <div>
            <ToDoList/>
        </div>
        </>
    );
};

export default ToDoListPage 