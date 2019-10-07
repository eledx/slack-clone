import React from 'react';
import Message from './Message.js';
import PostMessage from './PostMessage';

const Channel = () => {
  return (
    <div>
      <h1>Titre du channel</h1>
      <div>
        <Message />
        <Message />
        <Message />
      </div>
      <PostMessage />
    </div>
  );
};

export default Channel;
