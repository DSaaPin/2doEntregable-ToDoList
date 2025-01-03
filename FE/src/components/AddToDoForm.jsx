import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageModal from "./MessageModal";
import { useTasks } from "../context/TaskContext";
import styles from "./AddForm.styles.module.css" 

const AddToDoForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        isCompleted: false,
        description: "",
        creator: ""
    });

    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate();
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
        setOpenModal(true);

        setTimeout(() => {
            setOpenModal(false);
            navigate("/home");
        }, 2000);
    }

    const handleReset = () => {
        setFormData({ name: "", isCompleted: false, description: "", creator: "" })
    }

    const handleCancel = () => {
        navigate("/home");
    }

    return (
    <div className={`${styles.containerForm}`}>
        <h2 className={`${styles.title}`}>Agrega una nueva tarea:</h2>
        <form onSubmit={handleSubmit}>
            <label>Título:
                <input type="text" name="name" value={formData.name}
                    onChange={handleChange}
                    placeholder="Título de tarea" required />
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
            <div className={`${styles.buttonsContainer}`}>
            <button type="submit">Guardar tarea</button>
            <button type="button" onClick={handleReset}>Limpiar datos</button>
            <button type="button" onClick={handleCancel}>Cancelar</button>
            </div>
        </form>
        {openModal && <MessageModal />}
    </div>
    );
};

export default AddToDoForm;