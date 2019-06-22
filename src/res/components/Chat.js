import React,{useState,useEffect,useRef} from 'react';
import ChatMessages from './ChatMessages';
import {SocketContext} from './SocketContext';

function Chat(props) {

    const chatMessageRef = useRef(null);
    const messageBoxRef = useRef(null);
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    function handleSetMessage(message) {
        if (message.trim().length !== 0) {
            setMessages([...messages, message]);
            setMessage('');
            messageBoxRef.current.focus();    
        }
    }

    useEffect( () => {
        chatMessageRef.current.scroll(0,chatMessageRef.current.scrollHeight);
    });
    
    return (
        <div className="chat">
            <SocketContext.Consumer>
            { 
                (value) => (
                    <React.Fragment>
                        {console.log(value)}
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
                    </React.Fragment>
                )
            }
            </SocketContext.Consumer>
        </div>
    );
}

export default Chat;