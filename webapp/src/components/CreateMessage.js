import React from 'react';

const CreateMessage = () => {
  let input;
  return (
    <form
      className="input-group mb-3 p-3"
      onSubmit={e => {
        e.preventDefault();
        console.log(`click from CreateMessage ${input.value}`);
      }}
    >
      <input
        ref={node => {
          input = node;
        }}
        type="text"
        className="form-control"
        placeholder="Write a message"
      />
      <div className="input-group-append">
        <button className="btn btn-success">Send</button>
      </div>
    </form>
  );
};

export default CreateMessage;
