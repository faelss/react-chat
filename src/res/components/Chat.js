import React,{useState,useEffect} from 'react';
import ChatMessages from './ChatMessages';

function Chat(props) {

    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);
    
    useEffect( () => {
        console.log(messages);
    });
    
    return (
        <div className="chat">
            <ChatMessages messages={messages} />
            <textarea type="text"
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="button"
                onClick={() => setMessages([...messages, message])}
            >Send</button>
        </div>
    );
}

export default Chat;