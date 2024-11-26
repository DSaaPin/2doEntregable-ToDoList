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
        <div className={`${styles.card}`}>
            <div>{task.name}</div>
            <div>{task.description} {task.creator} 
                <input type="checkbox" checked={task.isCompleted} onChange={handleCheckChange}></input></div>
            <div>
                <button onClick={openModal}>Editar</button>
                <button onClick={() => deleteTask(task.id)}>🗑</button>
            </div>

            {isModalOpen && <EditTaskModal task={task} closeModal={closeModal}/>}
        </div>
    )
}

export default ToDoItem;