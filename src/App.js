import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import InputTask from './component/InputTask';
import ListItem from './component/ListItems';

function App() {
  const [task, setTask] = useState(([
    {
    id: 1,
    text: 'Buy Flowers',
    completed: true
    },
    {
    id: 2,
    text: 'Meet up with Hannah',
    completed: false
    }
    ]));
  const nextId = useRef(3); // Start from the next available ID

  const addTask = (taskText) => {
    const newTask = { id: nextId.current, text: taskText, completed: false };
    setTask((prevTasks) => [...prevTasks, newTask]);
    nextId.current += 1; // Increment ID for the next task
  };
  return (
<div>
  <InputTask addTask={addTask}/>
  <ul>
  {task.length > 0 ? (
    task.map((t, index) => <ListItem key={index} task={t} />)
  ) : (
    <p>No tasks to show</p>
  )}
</ul>
</div>
  );
}

export default App;
