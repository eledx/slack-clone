import React from 'react';

const PostMessage = () => {
  return (
    <div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Entrer votre message"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div class="input-group-append">
          <button type="button" class="btn btn-success">
            Envoyer !
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostMessage;
