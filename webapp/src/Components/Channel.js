import React from 'react';
import Message from './Message.js'

const Channel = () => {
      return (
        <div>
          <h1>Titre du channel</h1>
          <div>
            <Message />
            <Message />
            <Message />
          </div>
        </div>
      );
  }

export default Channel;