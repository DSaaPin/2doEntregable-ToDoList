import {useTasks} from '../context/TaskContext';
import {ToDoItem} from './ToDoItem';
import styles from './ToDoList.styles.module.css'

const ToDoList = () => {
    const { tasks } = useTasks();

    return(
        <div className={`${styles.listContainer}`}>
        <h2 className={`${styles.title}`}>Lista de tareas</h2>
            {tasks.map((task) => (
                <ToDoItem key={task.id} task={task}/>
            ))}
        </div>
    );
};

export default ToDoList;