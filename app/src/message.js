
import React from 'react'

const Message = ({message,name})=> (
        <div className="message">
            {name} : {message}
        </div>
    )
export default Message;
