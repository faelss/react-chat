import React, { useContext, useEffect, useState } from "react";
import "../css/App.css";
import Chat from "./Chat";
import { AppContext } from "./AppContext";

function App() {
  const { SocketContext: socket } = useContext(AppContext);

  console.log(socket);

  const [user, setUser] = useState(null);

  useEffect(() => {
    socket.on("user::getData", (user) => {
        console.log(user)
        setUser(user)
    });
  }, [user]);

  if (!user) {
      return null;
  }

  return (
    <div className="App">
      <AppContext.Provider value={socket, user}>
        <Chat />
      </AppContext.Provider>
    </div>
  );
}

export default App;
