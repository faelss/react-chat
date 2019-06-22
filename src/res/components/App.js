import React,{useContext} from 'react';
import '../css/App.css';
import Chat from './Chat';
import {SocketContext} from './SocketContext';

function App() {

    let socketContextValue = useContext(SocketContext);

    return (
        <div className="App">
            <SocketContext.Provider value={socketContextValue}>
                <header className="App-header">
                </header>
                <Chat/>
            </SocketContext.Provider>
        </div>
    );
}

export default App;