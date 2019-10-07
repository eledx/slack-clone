import React, { useState, useEffect } from 'react';
import {
  Container,
  HeaderMessageList,
  FooterMessageList,
  MainMessageList,
} from '../style/styled';
import CreateMessage from './CreateMessage';
import MessageItem from './MessageItem';
import Spinner from './Spinner';

const MessageList = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const channelId = props.match.params.id;

  useEffect(() => {
    fetch(`/api/messages`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, [channelId]);

  return (
    <Container>
      <HeaderMessageList className="d-flex justify-content-between">
        <p className="font-weight-bold p-3">#Channel {channelId}</p>
      </HeaderMessageList>

      <MainMessageList>
        {loading ? (
          <Spinner />
        ) : (
          <div>
            {data.map(message => {
              return <MessageItem key={message.id} message={message} />;
            })}
          </div>
        )}
      </MainMessageList>

      <FooterMessageList>
        <CreateMessage />
      </FooterMessageList>
    </Container>
  );
};

export default MessageList;
