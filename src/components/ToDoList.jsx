import {useTasks} from '../context/TaskContext';
import {ToDoItem} from './ToDoItem';
//import styles

const ToDoList = () => {
    const { tasks } = useTasks();

    return(<>
        <div>
            {tasks.map((task) => (
                <ToDoItem key={task.id} task={task}/>
            ))}
        </div></>
    );
};

export default ToDoList;