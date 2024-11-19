import { useState } from "react";
import {useTasks} from "../context/TaskContext";

const AddToDoForm = ({task = {}, onClose}) => {
    const [formData, setFormData] = useState({
        name: task.name || "",
        isCompleted: task.isCompleted || "false",
        description: task.description || "",
        creator: task.creator || ""
    });
    const {addTask } = useTasks();

    const handleChange = (e) => {
        const{name,value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(formData);
    }
    onClose();


return (
    <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name}
        onChange={handleChange}
        placeholder="Título de tarea"/>

        <input name="description" value={formData.description}
        onChange={handleChange}
        placeholder="Descripción"/>

        <input name="creator" value={formData.creator}
        onChange={handleChange}
        placeholder="Creador"/>
        <button type="submit">Guardar Tarea</button>
    </form>
);

};

export default AddToDoForm;