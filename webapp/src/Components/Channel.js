import React from 'react';
import Message from './Message.js';
import PostMessage from './PostMessage';

class Channel extends React.Component {
  state = {
    chanName: this.props.chanName,
    channelId: this.props.channelId,
    isLoading: true,
    messages: [],
    shouldRefetchMessages: false,
  };

  async getMessages() {
    this.setState({
      shouldRefetchMessages: false,
    });
    const response = await fetch(`/api/channels/${this.props.channelId}/messages`);
    const { messages } = await response.json();
    this.setState({ messages, isLoading: false })
    console.log('responses', messages)
  }
  componentDidMount() {
    this.getMessages()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // will need to refetch whenever React Router passes another channel id without unmounting component
    if (nextProps.channelId !== prevState.channelId) {
      // equivalent to this.setState(…)
      return { channelId: nextProps.channelId, chanName: nextProps.chanName, shouldRefetchMessages: true };
    }
    return null;
  }

  componentDidUpdate() {
    if (this.state.shouldRefetchMessages) {
      this.getMessages();
    }
  }

  render () {
    if (this.state.isLoading) {
      return <div>Loading…</div>;
    }
    return (
      <div>
        <h1>{this.state.chanName}</h1>
        {this.state.messages.map(message => { 
          return <Message content={message.content}/>
        })}
        <PostMessage />
      </div>
    );
  }
  
};

export default Channel;
