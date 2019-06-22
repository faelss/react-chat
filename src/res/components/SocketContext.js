import React from 'react';
import openSocket from 'socket.io-client';

export const SocketContext = React.createContext(openSocket('http://localhost:8000'));