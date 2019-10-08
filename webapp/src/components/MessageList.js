import React, { useState, useEffect } from 'react';
import {
  Container,
  HeaderMessageList,
  FooterMessageList,
  MainMessageList,
  MessageListEmpty,
} from '../style/styled';
import CreateMessage from './CreateMessage';
import MessageItem from './MessageItem';
import Spinner from './Spinner';

const MessageList = props => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shouldRefetchMessages, setShouldRefetchMessages] = useState(true);
  const channel = props.currentChannel

  useEffect(() => {
    fetch(`/api/channels/${channel.id}/messages`)
      .then(res => res.json())
      .then(data => {
        setMessages(data.messages);
        setLoading(false);
        setShouldRefetchMessages(false);
      });
  }, [channel.id, shouldRefetchMessages]);

  return (
    <Container>
      <HeaderMessageList className="d-flex justify-content-between">
        <p className="font-weight-bold p-3"># {channel.name}</p>
      </HeaderMessageList>

      <MainMessageList>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {messages.length ? (
              messages.map(message => {
                return <MessageItem key={message.id} message={message} />;
              })
            ) : (
              <MessageListEmpty>
                Start a discussion
                <span className="ml-2" role="img" aria-label="smile">
                  😁
                </span>
              </MessageListEmpty>
            )}
          </>
        )}
      </MainMessageList>

      <FooterMessageList>
        <CreateMessage
          channelId={channel.id}
          setShouldRefetchMessages={setShouldRefetchMessages}
        />
      </FooterMessageList>
    </Container>
  );
};

export default MessageList;
