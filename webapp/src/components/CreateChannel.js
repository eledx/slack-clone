import React, { useState } from 'react';
import { ButtonSideBar } from '../style/styled';
const CreateChannel = () => {
  const [formOpen, setFormOpen] = useState(false);
  let input;
  return (
    <div>
      {!formOpen ? (
        <div onClick={() => setFormOpen(!formOpen)} className="text-white">
          <ButtonSideBar>
            <i className="fas fa-plus-circle"></i> Add channel
          </ButtonSideBar>
        </div>
      ) : (
        <form
          className="d-flex"
          onSubmit={e => {
            e.preventDefault();
            console.log(`click from CreateChannel${input.value}`);
            setFormOpen(!formOpen);
          }}
        >
          <input
            ref={node => {
              input = node;
            }}
            className="form-control"
          />

          <span
            className="btn btn-danger"
            onClick={() => setFormOpen(!formOpen)}
          >
            X
          </span>
        </form>
      )}
    </div>
  );
};

export default CreateChannel;
