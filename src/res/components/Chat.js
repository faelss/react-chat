import React, { useState, useEffect, useRef, useContext } from "react";
import ChatMessages from "./ChatMessages";
import { AppContext } from "./AppContext";

function Chat(props) {
  const chatMessageRef = useRef(null);
  const messageBoxRef = useRef(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = useContext(AppContext);

  console.log(socket)

  useEffect(() => {
    listenBroadcastMessages();
  }, []);

  function listenBroadcastMessages() {
      socket.on("message::broadcast", newMessage => {
        setMessages(prevMessages => [
            ...prevMessages,
            {
                msg: newMessage,
                userId: 0
            }
        ]);
      })
  }

  function sendMessage(message) {
    if (message.trim().length !== 0) {
        socket.emit("message::broadcast", message);
        setMessage("");
    //   sendMessageBroadcast(message, (broadcastMessage, err) => {
    //     if (!err) {
    //       setMessages((prevState) => [
    //         ...prevState,
    //         {
    //           msg: broadcastMessage,
    //           id: Math.random(),
    //         },
    //       ]);
    //       setMessage("");
    //       socket.removeAllListeners("broadcast");
    //       messageBoxRef.current.focus();
    //     }
    //   });
    }
  }

  useEffect(() => {
    chatMessageRef.current.scroll(0, chatMessageRef.current.scrollHeight);
  });

  return (
    <div className="chat">
      <React.Fragment>
        <ChatMessages chatMessageRef={chatMessageRef} messages={messages} />
        <textarea
          ref={messageBoxRef}
          onKeyPress={(e) =>
            e.key === "Enter" && sendMessage(message)
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="raised"
          type="button"
          onClick={() => sendMessage(message)}
        >
          Send
        </button>
      </React.Fragment>
    </div>
  );
}

export default Chat;
