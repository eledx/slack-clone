import React from 'react';
import Channel from './Components/Channel.js';
import PostMessage from './Components/PostMessage';
import './App.css';
import Menu from './Components/Menu/Menu.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <Channel />
      <PostMessage />
    </div>
  );
}

export default App;
