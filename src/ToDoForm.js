import React, { useState } from 'react';
 
function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('Medium'); // Default priority
 
  const handleAddTask = () => {
    addTask(taskText, priority); // Pass task and priority to App
    setTaskText(''); // Clear the input field
    setPriority('Medium'); // Reset priority to default
  };
 
  return (
<div className="form-container">
<input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
<select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
>
<option value="High">High</option>
<option value="Medium">Medium</option>
<option value="Low">Low</option>
</select>
<button onClick={handleAddTask}>Add Task</button>
</div>
  );
}
 
export default ToDoForm;