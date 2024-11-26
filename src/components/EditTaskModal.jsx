import {useState} from "react";
import {useTasks} from "../context/TaskContext";
import styles from "./EditTaskModal.styles.module.css"

export const EditTaskModal = ({task , closeModal}) => {
    const {updateTask} = useTasks();
    const [formData, setFormData] = useState({...task});

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((data) => ({...data, [name]: type === "checkbox" ? checked : value,}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedTask = {
            id: task.id,
            name: formData.name,
            isCompleted: formData.isCompleted,
            description: formData.description,
            creator: formData.creator,            
        };

        updateTask(task.id, updatedTask);
        closeModal();
    };

    return (
        <div className={`${styles.modal}`}>
            <form onSubmit={handleSubmit}>
            <label>Título:
                <input type="text" name="name" value={formData.name}
                    onChange={handleChange} required/>
            </label>
            <label>Descripción:
                <input type="text" name="description" value={formData.description}
                    onChange={handleChange}/>
            </label>
            <label>Creador:
                <input type="text" name="creator" value={formData.creator}
                    onChange={handleChange}/>
            </label>
            <label>Completada?
                <input type="checkbox" className={`${styles.checkbox}`} name="isCompleted" checked={formData.isCompleted} onChange={handleChange}></input>
            </label>
            <div className={`${styles.buttonsContainer}`}>
                <button type="submit">Guardar</button>
                <button type="button" onClick={closeModal}>Cancelar</button>
            </div>
            </form>
        </div>
    )
}

export default EditTaskModal;