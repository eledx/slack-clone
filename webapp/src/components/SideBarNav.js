import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SlackIcon from '../img/slack.png';
import SplitPane from 'react-split-pane';
import Home from './Home';
import ChannelPage from './MessageList';
import CreateChannel from './CreateChannel';
import Spinner from './Spinner';

import {
  SideBar,
  ButtonSideBar,
  HeaderSideBar,
  MainSideBar,
  FooterSideBar,
} from '../style/styled';

const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  height: '100%',
};

const SideBarNav = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shouldChannel, setShouldChannel] = useState(false);

  // TODO: voir si il est possible de stocker la requête
  // et passer en parametre l'url le chargment et la data pour ne pas dupliquer

  useEffect(() => {
    fetch('/api/channels/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
        setShouldChannel(false)
      });
  }, [shouldChannel]);

  return loading ? (
    <Spinner />
  ) : (
    <SplitPane
      split="vertical"
      minSize={150}
      defaultSize={220}
      resizerStyle={styles}
    >
      <SideBar>
        <HeaderSideBar className="d-flex justify-content-center align-items-center">
          <Link className="text-white" to="/">
            <img src={SlackIcon} alt="Slack logo" className="mr-2" />
            Slack-Clone
          </Link>
        </HeaderSideBar>

        <CreateChannel setShouldChannel={setShouldChannel} />
        <MainSideBar>
          {data.channels.map(channel => {
            return (
              <ButtonSideBar key={channel.id}>
                <Link
                  className=" p-3 text-white d-block"
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

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/channels/:id/messages" component={ChannelPage} />
      </Switch>
    </SplitPane>
  );
};

export default SideBarNav;
