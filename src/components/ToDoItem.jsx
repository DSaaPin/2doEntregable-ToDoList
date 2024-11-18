import {useState} from 'react';
import {useTasks} from '../context/TaskContext';
//import styles 

export const ToDoItem = ({task}) => {
    //const {deleteTask} = useTasks();

    return (
        <div>
            <div>{task.name}</div>
            <div>{task.description} {task.creator} {task.isCompleted}</div>
        </div>
    )

}

export default ToDoItem;