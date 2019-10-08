import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SlackIcon from '../img/slack.png';
import SplitPane from 'react-split-pane';
import Home from './Home';
import MessageList from './MessageList';
import CreateChannel from './CreateChannel';
import Spinner from './Spinner';
import { splitPaneStyles } from '../style/splitPaneStyles';
import {
  SideBar,
  ButtonSideBar,
  HeaderSideBar,
  MainSideBar,
  FooterSideBar,
} from '../style/styled';

const SideBarNav = () => {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shouldRefetchChannel, setShouldRefetchChannel] = useState(false);

  useEffect(() => {
    fetch('/api/channels/')
      .then(res => res.json())
      .then(data => {
        setChannels(data.channels);
        setLoading(false);
        setShouldRefetchChannel(false);
      });
  }, [shouldRefetchChannel]);

  return loading ? (
    <Spinner />
  ) : (
    <SplitPane
      split="vertical"
      minSize={150}
      defaultSize={220}
      resizerStyle={splitPaneStyles}
    >
      <SideBar>
        <HeaderSideBar className="d-flex justify-content-center align-items-center">
          <Link className="text-white" to="/">
            <img src={SlackIcon} alt="Slack logo" className="mr-2" />
            Slack-Clone
          </Link>
        </HeaderSideBar>

        <CreateChannel setShouldRefetchChannel={setShouldRefetchChannel} />

        <MainSideBar>
          {channels.map(channel => {
            return (
              <ButtonSideBar key={channel.id}>
                <Link
                  className="p-3 text-white d-block"
                  key={channel.id}
                  to={`/channels/${channel.id}/messages`}
                >
                  # {channel.name}
                </Link>
              </ButtonSideBar>
            );
          })}
        </MainSideBar>

        <FooterSideBar className="d-flex justify-content-center align-items-center">
          footer
        </FooterSideBar>
      </SideBar>

      {/* TODO: Move switch into a separate file ? */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/channels/:channelId/messages"
          render={props => {
            const currentChannel = channels.find(
              ({ id }) => id.toString() === props.match.params.channelId
            );
            return <MessageList currentChannel={currentChannel} />;
          }}
        />
      </Switch>
    </SplitPane>
  );
};

export default SideBarNav;
