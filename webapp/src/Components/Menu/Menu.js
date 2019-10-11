import React from 'react';
import './Menu.css';
import BurgerButton from './BurgerButton';
import InfoHeader from './InfoHeader';
import './InfoHeader.css';
import SearchBar from './SearchBar';
import './SearchBar.css';
import { Link, Route, Switch } from 'react-router-dom';
import Channel from '../Channel';
import { InputGroup, InputGroupAddon, Input, Button, Form } from 'reactstrap';

class Menu extends React.Component {
  // On créer un état qui (ici) est un booléen false pour le moment car un état doit changer par la suite
  state = {
    isOpenMenu: false,
    channels: [],
    nameChannels: '',
    shouldRefreshChannels: false,
  };
  getNameChannels = e => {
    this.setState({
      nameChannels: [e.target.value],
    });
  };

  // On créer une fonction fléchée qui aura pour objectif à son déclenchement de configuré l'état déclaré plus tôt
  toggleIsOpenMenu = () => {
    this.setState({
      // On configure l'état isOpen pour qu'il passe de false à true et de true à false. On fait de lui un toggle
      isOpenMenu: !this.state.isOpenMenu,
      isOpenDropDown: !this.state.isOpenDropDown,
    });
  };

  // Fonction qui récupère le nom des channels pour les passer en props au composant Channel
  getChanName = idChan => {
    let res = this.state.channels.map(chan => {
      if (chan.id === parseInt(idChan)) {
        return chan.name;
      }
    });
    return res;
  };

  // Fonction qui récupère les datas des channels
  getChannels = async () => {
    const response = await fetch('/api/channels');
    const { channels } = await response.json();
    this.setState({ channels });
  };

  postChannels = () => {
    fetch('/api/channels', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        nameChannels: this.state.nameChannels[0],
      }),
    });
    this.setState({ shouldRefreshChannels: true, nameChannels: '' });
  };

  deleteChannels = channelId => {
    fetch(`/api/channels/:${channelId}/`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE',
    });
    console.log(channelId);
  };

  componentDidMount() {
    this.getChannels();
  }
  componentDidUpdate() {
    if (this.state.shouldRefreshChannels) {
      this.getChannels();
    }
  }

  render() {
    //   On créer une constante burgerButton qui vérifie si isOpenMenu est il est égal à true (on set la classe de la balise à 'burger_button open_burger' ) ou si égal à false (on set la classe de la balise à 'burger_button' )
    const burgerButton = this.state.isOpenMenu
      ? 'burger_button open_burger'
      : 'burger_button';

    return (
      <div>
        <nav role="navigation" className="nav-bar">
          {/* On appel le composant BurgerButton et on lui fais passer en paramètre la fonction toggleIsOpenMenu et burgerButton */}
          <BurgerButton
            fonction={this.toggleIsOpenMenu}
            burgerButton={burgerButton}
          />
          {/* si isOpenMenu est égal à true on set la classe à 'is-visible-in-mobile' */}
          <ul
            className={
              this.state.isOpenMenu
                ? 'left-navbar is-visible-in-mobile'
                : 'left-navbar'
            }
          >
            <li className="low-vertical-padding">
              <InfoHeader />
            </li>
            <li className="low-vertical-padding">
              <SearchBar />
            </li>
            <li className="low-vertical-padding">
              <a href="#">Home</a>
            </li>
            <li>
              <ul>
                <li>
                  <Form className="low-vertical-padding create-channel-form" onSubmit={this.postChannels}>
                    <InputGroup>
                      <Input className="global-input"
                        placeholder="Create channel"
                        type="text"
                        value={this.state.nameChannels}
                        onChange={this.getNameChannels}
                      />
                      <InputGroupAddon addonType="append">
                        <Button className="submit-button" type="submit">Create</Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Form>
                </li>
                {this.state.channels.map(channel => (
                  <li key={channel.id}>
                    <Link to={`/channels/${channel.id}/messages`}>
                      {channel.name}
                    </Link>
                    <div onClick={this.deleteChannels}>X</div>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a href="#">Private messages</a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/channels/:channelId/messages"
            render={props => (
              <Channel
                channelId={props.match.params.channelId}
                chanName={this.getChanName(props.match.params.channelId)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Menu;
