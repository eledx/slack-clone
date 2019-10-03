import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SlackIcon from '../img/slack.png';
import SplitPane from 'react-split-pane';
import Home from './Home';
import ChannelPage from './ChannelPage';
import CreateChannel from './CreateChannel'

import { channels } from '../data/static';

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
  return (
    <Router>
      <SplitPane
        split="vertical"
        minSize={150}
        defaultSize={220}
        resizerStyle={styles}
      >
        <SideBar>
          <Link to="/">
            <HeaderSideBar className="d-flex justify-content-center align-items-center">
              <img src={SlackIcon} alt="Slack logo" className="mr-2" />
              Slack-Clone
            </HeaderSideBar>
          </Link>

          <MainSideBar>
            {channels.map(channel => {
              return (
                <Link key={channel.id} to={`/channels/${channel.id}`}>
                  <ButtonSideBar># {channel.name}</ButtonSideBar>
                </Link>
              );
            })}
            <CreateChannel/>
          </MainSideBar>

          <FooterSideBar className="d-flex justify-content-center align-items-center">
            footer
          </FooterSideBar>
        </SideBar>

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/channels/:id" component={ChannelPage} />
        </div>
      </SplitPane>
    </Router>
  );
};

export default SideBarNav;
