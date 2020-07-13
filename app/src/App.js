import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [c, setC] = useState(0)  
  const [n, setN] = useState("")  
  return (
    <div className="App">
        <h1>{n}</h1>  
        <input onChange={(e)=>{setN(e.target.value)}} value={n} />  
        <h1>{c}</h1>  
        <button onClick={()=>{setC(c-1)}}>-</button>
        <button onClick={()=>{setC(c+1)}}>+</button>
    </div>
  );
}

export default App;
