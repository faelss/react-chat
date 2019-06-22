import React,{useState,useEffect} from 'react';
import ChatMessages from './ChatMessages';

function Chat(props) {

    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    function handleSetMessage(message) {
        setMessages([...messages, message])
        setMessage('');
    }
    
    return (
        <div className="chat">
            <ChatMessages messages={messages} />
            <textarea type="text"
                onKeyPress={ (e) => e.key === 'Enter' && handleSetMessage(message)}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="button"
                onClick={() => handleSetMessage(message)}
            >Send</button>
        </div>
    );
}

export default Chat;