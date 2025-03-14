import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [taskCount, setTaskCount] = useState(0); 
  const [search, setSearch] = useState(''); 
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleAddTask = () => {
    if (task.length >= 15) {
      alert("14文字までにしてください");
      return;
    }
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
      setTaskCount(taskCount + 1);
    }
  };
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setTaskCount(taskCount - 1);
  };
  const filteredTasks = tasks.filter((task) =>
    task.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="kakoi">
        <h3 className='TODOアプリ'>TODOアプリ</h3>
        <div className="counter">
          <p>タスク数: {taskCount}</p>
        </div>
        <div className="task-list">
          <div>
            <div className="tekist">
              <input
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="タスクを入力..."
                maxLength="20"
              />
            </div>
            <button onClick={handleAddTask} className="tuika-button">追加</button>
          </div>
          {filteredTasks.map((task, index) => (
            <div key={index} className="task-item">
              <span>{task}</span>
              <button onClick={() => handleDeleteTask(index)} className="delete-button">削除</button>
            </div>
          ))}
        </div>
      </div>
      <div className="siborikomi">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="タスクを検索..."
          className="search-input"
        />
      </div>
    </div>
  );
}

export default App;
