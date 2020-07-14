import React, { useState } from 'react';
import Mensaje from './mensaje';
import './App.css';

function App() { 
  const [n, setN] = useState("")  
  const [ms, setMs] = useState([])  
  
  return (
    <div className="App">
        <h1>{n}</h1>  
        <input onKeyUp={(e)=>{
            if(e.keyCode === 13){
                setMs([n,...ms]);
                e.target.value = "";
            }
            else
            setN(e.target.value)}} />  
            
        <div>
            {
                ms.map((m,i)=>(
                    <Mensaje key={i} m={m} nombre={"Elber"} />
                ))
            }
        </div>
    </div>
  );
}

export default App;
