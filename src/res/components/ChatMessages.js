import React from 'react';

function ChatMessages(props) {
    return (
        <div className="chat-messages">
            {
                props.messages.map(value => {
                    return (
                        <div className="message">
                            {value}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ChatMessages;