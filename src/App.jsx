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
    <div className="app-container">
      <h1 className="app-title">TODOリスト</h1>
      <div className="task-input-container">
        <input 
          type="text" 
          value={task} 
          onChange={handleInputChange} 
          placeholder="タスクを入力..."
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-button">追加</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => handleDeleteTask(index)} className="delete-button">削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
