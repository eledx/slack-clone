import React, { useState, useEffect } from 'react';
import {
  Container,
  HeaderChannel,
  FooterChannel,
  MainChannel,
} from '../style/styled';
import CreateMessage from './CreateMessage';
import MessageItem from './MessageItem';

import { HashLoader } from 'react-spinners';
import { messages } from '../data/static';

const ChannelPage = props => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  });
  return (
    <Container>
      <HeaderChannel className="d-flex justify-content-between">
        <p className="font-weight-bold p-3">#Channel {props.match.params.id}</p>
      </HeaderChannel>

      <MainChannel>
        {loading ? (
          <div
            style={{ marginTop: 250 }}
            className="d-flex justify-content-center align-items-center"
          >
            <HashLoader
              sizeUnit={'px'}
              size={120}
              color={'#3f0f40'}
              loading={loading}
            />
          </div>
        ) : (
          <div>
            {messages.map((message, index) => {
              if (message.channelId === props.match.params.id)
                return <MessageItem key={index} message={message}/>
            })}
          </div>
        )}
      </MainChannel>

      <FooterChannel>
        <CreateMessage />
      </FooterChannel>
    </Container>
  );
};

export default ChannelPage;
