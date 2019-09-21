import React,{useState,useEffect,useRef} from 'react';
import ChatMessages from './ChatMessages';
import {SocketContext} from './SocketContext';
import {sendMessageBroadcast} from '../hooks/sendMessageBroadcast';

function Chat(props) {

    const chatMessageRef = useRef(null);
    const messageBoxRef = useRef(null);
    const [message,setMessage] = useState('');
    const [messages,setMessages] = useState([]);

    function handleSetMessage(message,socket) {     
        if (message.trim().length !== 0) {
            sendMessageBroadcast(message,socket, (broadcastMessage,err) => {
                if (!err) {
                    setMessages(prevState => [
                        ...prevState,
                        {
                            msg:broadcastMessage,
                            id:Math.random()
                        }
                    ]);
                    setMessage('');
                    socket.removeAllListeners('broadcast');
                    messageBoxRef.current.focus();
                }
            });
        }
    }

    useEffect( () => {   
        chatMessageRef.current.scroll(0,chatMessageRef.current.scrollHeight);
    });
    
    return (
        <div className="chat">
            <SocketContext.Consumer>
            { 
                (socket) => (
                    <React.Fragment>
                        <ChatMessages chatMessageRef={chatMessageRef} messages={messages} />
                        <textarea 
                            ref={messageBoxRef}
                            onKeyPress={ (e) => e.key === 'Enter' && handleSetMessage(message,socket)}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button 
                            className="raised"
                            type="button"
                            onClick={() => handleSetMessage(message,socket)}
                        >Send</button>
                    </React.Fragment>
                )
            }
            </SocketContext.Consumer>
        </div>
    );
}

export default Chat;