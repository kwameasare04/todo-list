import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputTask from './component/InputTask';

function App() {
  const [task, setTask] = useState({});
  return (
<div>
  <InputTask></InputTask>
</div>
  );
}

export default App;
