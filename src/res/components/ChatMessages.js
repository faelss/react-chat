import React from 'react';

function ChatMessages(props) {

    return (
        <div ref={props.chatMessageRef} className="chat-messages">
            {
                props.messages.map((value,index) => {
                    return (
                        <div key={'message-div-key-'+index} className="message">
                            {value}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ChatMessages;