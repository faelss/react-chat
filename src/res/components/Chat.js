import React,{useState,useEffect,useRef} from 'react';
import ChatMessages from './ChatMessages';

function Chat(props) {

    const chatMessageRef = useRef(null);
    const messageBoxRef = useRef(null);
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    function handleSetMessage(message) {
        setMessages([...messages, message])
        setMessage('');
        messageBoxRef.current.focus();    
    }

    useEffect( () => {
        chatMessageRef.current.scroll(0,chatMessageRef.current.scrollHeight+35);
    });
    
    return (
        <div className="chat">
            <ChatMessages chatMessageRef={chatMessageRef} messages={messages} />
            <textarea 
                ref={messageBoxRef}
                onKeyPress={ (e) => e.key === 'Enter' && handleSetMessage(message)}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button 
                className="raised"
                type="button"
                onClick={() => handleSetMessage(message)}
            >Send</button>
        </div>
    );
}

export default Chat;