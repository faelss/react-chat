import React from 'react';

function ChatMessages(props) {
    return (
        <div className="chat-messages">
            {
                props.messages.map(value => {
                    //todo
                })
            }
        </div>
    );
}

export default ChatMessages;