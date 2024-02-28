import { useState } from 'react';
import TaskForm from '../task-form/task-form';
import TaskList from '../task-list/task-list';
import './task-manager.css';

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    const toggleTask = (taskId) => {
        setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed };
            }
            return task;
        }));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} />
        </div>
    );
}  

export default TaskManager;