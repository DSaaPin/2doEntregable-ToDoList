import { useState } from "react";
import { useTasks } from "../context/TaskContext";
//import styles from "./Form.styles.module.css" USAR ESTIOS LUEGO

const AddToDoForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        isCompleted: false,
        description: "",
        creator: ""
    });

    const { addTask } = useTasks();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            name: formData.name,
            isCompleted: formData.isCompleted,
            description: formData.description,
            creator: formData.creator,
        };

        addTask(newTask);
    }

    const handleReset = () => {
        setFormData({name: "", description: "", creator: ""})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Título:
                <input type="text" name="name" value={formData.name}
                    onChange={handleChange}
                    placeholder="Título de tarea" />
            </label>
            <label>Descripción: 
                <input type="text" name="description" value={formData.description}
                    onChange={handleChange}
                    placeholder="Descripción" />
            </label>
            <label>Creador: 
                <input type="text" name="creator" value={formData.creator}
                    onChange={handleChange}
                    placeholder="Creador" />
            </label>
            <button type="submit">Guardar Tarea</button>
            <button type="button" onClick={handleReset}>Cancelar</button>
        </form>
    );

};

export default AddToDoForm;