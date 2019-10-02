import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import Home from './components/Home';
import Channel from './components/Channel';

import { Menu, ButtonMenu } from './style/styled';

const styles = {
  background: '#000',
  width: '2px',
  cursor: 'col-resize',
  height: '100%',
};

export default function App() {
  return (
    <Router>
      <SplitPane
        split="vertical"
        minSize={150}
        defaultSize={220}
        resizerStyle={styles}
      >
        <Menu>
          <Link to="/channels/0">
            <ButtonMenu>Channel0</ButtonMenu>
          </Link>

          <Link to="/channels/1">
            <ButtonMenu>Channel1 </ButtonMenu>
          </Link>
        </Menu>

        <div>
          <Route exact path="/" component={Home} />
          <Route path="/channels/:id" component={Channel} />
        </div>
      </SplitPane>
    </Router>
  );
}
