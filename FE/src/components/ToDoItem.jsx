import {useState} from 'react';
import {useTasks} from '../context/TaskContext';
import {EditTaskModal} from './EditTaskModal'
import styles from "./ToDoItem.styles.module.css";

export const ToDoItem = ({task}) => {
    const {deleteTask, checkTask} = useTasks();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleCheckChange = () =>{
        checkTask(task.id, !task.isCompleted);
    };


    return (
        <div className={ task.isCompleted ? `${styles.cardCompleted}` : `${styles.card}`}>
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <p>Creador: {task.creator} </p>
            <div className={`${styles.optionsContainer}`}>
                <label>Completada?: 
                <input className={`${styles.checkbox}`} type="checkbox" checked={task.isCompleted} onChange={handleCheckChange}></input></label>
            
                <button onClick={openModal}>Editar</button>
                <button onClick={() => deleteTask(task.id)}>🗑</button>
            </div>

            {isModalOpen && <EditTaskModal task={task} closeModal={closeModal}/>}
        </div>
    )
}

export default ToDoItem;