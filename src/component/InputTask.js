import React, { useState } from "react";
import '../css/button.css';

function InputTask({addTask}){
    const [input, setInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
          addTask(input);
          setInput(""); // Clear the input field after adding the task
        }
      };
    return(
        <div>
         <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
         <button class="button-49" type="submit"  onClick={handleSubmit}>add task</button>
        </div>

       
        
    );
};

export default InputTask;

