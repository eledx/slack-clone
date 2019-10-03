import React from 'react';
import Channel from './Components/Channel.js';
import './App.css';
import Menu from './Components/Menu/Menu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Channel />
    </div>
  );
}

export default App;
