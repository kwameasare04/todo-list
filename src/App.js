import './App.css';
import { useState, useRef } from 'react';
import InputTask from './component/InputTask';
import ListItem from './component/ListItems';

function App() {
  const [task, setTask] = useState(([
    {
    id: 1,
    text: 'Meet Jonny Silverhand',
    completed: true
    },
    {
    id: 2,
    text: 'Explore NightCity',
    completed: false
    }
    ]));
  const nextId = useRef(3); // Start from the next available ID

  const addTask = (taskText) => {
    const newTask = { id: nextId.current, text: taskText, completed: false };
    setTask((prevTasks) => [...prevTasks, newTask]);
    nextId.current += 1; // Increment ID for the next task
  };

  const toggleTask = (id) => {
    setTask(
      task.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task //returns a task object with the task.completed flipped 
      )
    );
  };

    // Delete Task
    const deleteTask = (id) => {
      setTask(task.filter(task => task.id !== id)); //creates a new task array without the selected id
    };

  return (
<div>
  <InputTask addTask={addTask}/>
  <ul>
  {task.length > 0 ? (
    task.map((t, index) => <ListItem key={index} task={t} toggleTask={toggleTask} deleteTask={deleteTask} />)
  ) : (
    <p>No tasks to show</p>
  )}
</ul>
</div>
  );
}

export default App;
