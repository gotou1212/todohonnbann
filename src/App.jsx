import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>TODOリスト</h1>
  
        <input 
          type="text" 
          value={task} 
          onChange={handleInputChange} 
          placeholder="タスクを入力..."
        />
        <button onClick={handleAddTask} className="tuika-button">追加</button>
      </div>
  );
}

export default App;
