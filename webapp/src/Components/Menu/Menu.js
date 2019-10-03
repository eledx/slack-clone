import React from 'react';
import './Menu.css';
import BurgerButton from './BurgerButton'

class Menu extends React.Component {

    // On créer un état qui (ici) est un booléen false pour le moment car un état doit changer par la suite
  state = {
    isOpen: false,
  };

// On créer une fonction fléchée qui aura pour objectif à son déclenchement de configuré l'état déclaré plus tôt 
  toggleIsOpen = () => {
    this.setState({
        // On configure l'état isOpen pour qu'il passe de false à true et de true à false. On fait de lui un toggle
      isOpen: !this.state.isOpen
    });
  };

  render() {
    //   On créer une constante burgerButton qui vérifie si isOpen est il est égal à true (on set la classe de la balise à 'burger_button open_burger' ) ou si égal à false (on set la classe de la balise à 'burger_button' )
    const burgerButton = this.state.isOpen ? 'burger_button open_burger' : 'burger_button';

    return (
      <nav role="navigation" className="nav-bar">
          {/* On appel le composant BurgerButton et on lui fais passer en paramètre la fonction toggleIsOpen et burgerButton */}
        <BurgerButton 
        fonction = {this.toggleIsOpen}
        burgerButton = {burgerButton}
        />
        {/* si isOpen est égal à true on set la classe à 'is-visible-in-mobile' */}
        <ul className={this.state.isOpen ? "is-visible-in-mobile" : ''}>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Channels</a>
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
