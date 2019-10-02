import React, { useState } from 'react';

const SendMessage = () => {
  const [message, setMessage] = useState('');
  return (
    <form className="input-group mb-3 p-3">
      <input
        type="text"
        className="form-control"
        placeholder="Write a message"
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <div className="input-group-append">
        <button
          disabled={!message}
          className="btn btn-success"
          onClick={() => console.log('click from sendMessage')}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
