import React from 'react';

const PostMessage = () => {
  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Entrer votre message"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button type="button" className="btn btn-success">
            Envoyer !
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostMessage;
