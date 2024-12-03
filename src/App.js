import React, { useState } from 'react';
import './App.css';
import ToDoForm from './ToDoForm';
 
function App() {
  const [tasks, setTasks] = useState([]);
 
  // Add a new task
  const addTask = (taskText, priority) => {
    if (!taskText.trim() || tasks.find((task) => task.text === taskText)) {
      alert('Task cannot be empty or duplicate!');
      return;
    }
    setTasks([
      ...tasks,
      { text: taskText, priority, completed: false },
    ].sort((a, b) => (a.priority > b.priority ? 1 : -1))); // Sort tasks by priority
  };
 
  // Remove a task
  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
 
  // Toggle task completion
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
 
  return (
<div className="App">
<h1>ToDo List</h1>
<ToDoForm addTask={addTask} />
<div className="tasks-container">
        {tasks.map((task, index) => (
<div
            key={index}
            className={`task-card ${task.completed ? 'completed' : ''} ${
              task.priority.toLowerCase()
            }`}
>
<h3>{task.text}</h3>
<p>Priority: {task.priority}</p>
<div className="task-actions">
<button onClick={() => toggleComplete(index)}>
                {task.completed ? 'Undo' : 'Complete'}
</button>
<button className="remove-btn" onClick={() => removeTask(index)}>
                Remove
</button>
</div>
</div>
        ))}
</div>
</div>
  );
}
 
export default App;

