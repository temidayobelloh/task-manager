import Task from "../Task/task";
import './task-list.css';
const TaskList = ({ tasks, deleteTask, toggleTask }) => {
    return (
      <div className="task-list">
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            toggleTask={toggleTask} 
          />
        ))}
      </div>
    );
  };
  
export default TaskList;