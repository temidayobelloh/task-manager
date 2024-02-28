import Task from "../Task/task";
const TaskList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <div>
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