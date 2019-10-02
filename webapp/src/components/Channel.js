import React from 'react';
import {
  Container,
  HeaderChannel,
  FooterChannel,
  MainChannel,
} from '../style/styled';
import SendMessage from './SendMessage';

const Channel = props => {
  return (
    <Container>
      <HeaderChannel>
        <p className="font-weight-bold p-3">#Channel {props.match.params.id}</p>
      </HeaderChannel>

      <MainChannel>Messages</MainChannel>

      <FooterChannel>
        <SendMessage />
      </FooterChannel>
    </Container>
  );
};

export default Channel;
