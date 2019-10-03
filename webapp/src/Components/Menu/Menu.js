import React from 'react';
import './Menu.css';

function Menu() {
  // Script toggle class open-close burger-button
 const toggleOpenClose = () => {
    var openClose = document.querySelector('.burger_button');
    openClose.classList.toggle('open_close');
  }

  return (
    <nav role="navigation" className="nav-bar">
      <button onClick={toggleOpenClose} className="burger_button">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className="menu">
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

export default Menu;
