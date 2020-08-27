import React from "react";
import io from "socket.io-client";
const SocketContext = io("http://localhost:8000");

export const AppContext = React.createContext({
  SocketContext,
});
