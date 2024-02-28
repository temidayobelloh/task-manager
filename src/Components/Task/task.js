import './task.css';
const Task = ({ task, deleteTask, toggleTask }) => {
    return (
      <div className={`task ${task.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p><strong>Due Date:</strong> {task.dueDate}</p>
        </div>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    );
  };
  
export default Task;
