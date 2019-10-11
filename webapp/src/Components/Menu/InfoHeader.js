import React from 'react';
import './Menu.css'
import logo from './coucou.png';

const InfoHeader = () => {
  return (
    <div>
        <a > <img className="logo" alt="Home" src={logo} /> </a>

        <div>
            <span className="user-status">•</span>
        <p className="username color_white">Nom de l'utilisateur</p>
        </div>
    </div>
  );
};

export default InfoHeader;