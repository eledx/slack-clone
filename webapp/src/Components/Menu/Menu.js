import React from 'react';
import './Menu.css';
import BurgerButton from './BurgerButton';

class Menu extends React.Component {
  // On créer un état qui (ici) est un booléen false pour le moment car un état doit changer par la suite
  state = {
    isOpenMenu: false,
    isOpenDropDown: false,
  };

  // On créer une fonction fléchée qui aura pour objectif à son déclenchement de configuré l'état déclaré plus tôt
  toggleIsOpenMenu = () => {
    this.setState({
      // On configure l'état isOpen pour qu'il passe de false à true et de true à false. On fait de lui un toggle
      isOpenMenu: !this.state.isOpenMenu,
      isOpenDropDown: !this.state.isOpenDropDown,
    });
  };
  toggleIsOpenDropDown = () => {
    this.setState({
      isOpenDropDown: !this.state.isOpenDropDown,
    });
  };


  render() {
    //   On créer une constante burgerButton qui vérifie si isOpenMenu est il est égal à true (on set la classe de la balise à 'burger_button open_burger' ) ou si égal à false (on set la classe de la balise à 'burger_button' )
    const burgerButton = this.state.isOpenMenu
      ? 'burger_button open_burger'
      : 'burger_button';

    return (
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
          <li>
            <a href="#">Accueil</a>
          </li>
          <li onClick={this.toggleIsOpenDropDown}>
            <a
              className={
                this.state.isOpenDropDown
                  ? 'list-element-channels-open'
                  : 'list-element-channels'
              }
              href="#"
            >
              Channels
            </a>
            <ul
              className={
                this.state.isOpenDropDown ? 'channels-list-open' : 'channels-list'
              }
            >
              <li>
                <a>général</a>
              </li>
              <li>
                <a>random</a>
              </li>
              <li>
                <a>channel</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">Private messages</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
