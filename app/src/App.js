import React, { useState } from 'react';
import Message from './message';
import './App.css';

function App() {

    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    return (
        <div className="App">
            <h1>{message === "" ? "Escribe el mensaje." : message}</h1>
            <input className="redondeadonorelieve " onKeyUp={(e) => {

                if (e.keyCode === 13) {
                    setMessages([message, ...messages]);
                    e.target.value = "";
                }

                setMessage(e.target.value)

            }} />

            <div>
                {
                    messages.map((message, i) => (
                        <Message 
                            key={i} 
                            message={message} 
                            name={"Elber"} />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
