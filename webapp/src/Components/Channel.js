import React from 'react';
import Message from './Message.js';
import { InputGroup, InputGroupAddon, Input, Button, Form } from 'reactstrap';

class Channel extends React.Component {
  state = {
    chanName: this.props.chanName,
    channelId: this.props.channelId,
    isLoading: true,
    messages: [],
    messageContent: '',
    shouldRefetchMessages: false,
    shouldRefreshMessages: false,
  };

  getMessagesContent = e => {
    this.setState({
      messageContent: [e.target.value],
    });
    console.log('message content', this.state.messageContent);
  };

  async getMessages() {
    this.setState({
      shouldRefetchMessages: false,
    });

    const response = await fetch(
      `/api/channels/${this.props.channelId}/messages`
    );
    const { messages } = await response.json();
    this.setState({ messages, isLoading: false });
  }

  postMessages = e => {
    fetch(`/api/channels/${this.props.channelId}/messages`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        contentMessages: this.state.messageContent[0],
      }),
    });
    e.preventDefault();
    this.setState({ shouldRefreshMessages: true, messageContent: '' });
  };

  componentDidMount() {
    this.getMessages();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // will need to refetch whenever React Router passes another channel id without unmounting component
    if (nextProps.channelId !== prevState.channelId) {
      // equivalent to this.setState(…)
      return {
        channelId: nextProps.channelId,
        chanName: nextProps.chanName,
        shouldRefetchMessages: true,
      };
    }
    return null;
  }

  componentDidUpdate() {
    if (this.state.shouldRefreshMessages) {
      this.setState({ shouldRefreshMessages: false });
      alert('didUpdate');
      this.getMessages();
    }
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading…</div>;
    }
    return (
      <div>
        <h1>{this.state.chanName}</h1>
        {this.state.messages.map(message => {
          return <Message key={message.id} content={message.content} />;
        })}
        <Form onSubmit={this.postMessages}>
          <InputGroup>
            <Input
              placeholder="..."
              type="text"
              value={this.state.messageContent}
              onChange={this.getMessagesContent}
            />
            <InputGroupAddon addonType="append">
              <Button className="btn btn-success" type="submit">
                Ok
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default Channel;
