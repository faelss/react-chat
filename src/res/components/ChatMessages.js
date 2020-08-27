import React from 'react';

function ChatMessages(props) {

    return (
        <div ref={props.chatMessageRef} className="chat-messages">
            {
                props.messages.map(value => {
                    return (
                        <div key={'message-div-key-'+value.id} className="message">
                            {value.userId}:{value.msg}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ChatMessages;