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
      <div className="kakoi">
        <h3 className='TODOアプリ'>TODOアプリ</h3>
        <div>
          <div className="tekist">
          <input
            type="text" 
            value={task} 
            onChange={handleInputChange} 
            placeholder="タスクを入力..."
          />
          </div>
          <button onClick={handleAddTask} className="tuika-button">追加</button>
        </div>
      </div>
    </div>
  );
}

export default App;
