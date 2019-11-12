import React from 'react';

class Message extends React.Component {
  render() {
    return (
      <div>
        <b>nom utilisateur</b>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Message;
