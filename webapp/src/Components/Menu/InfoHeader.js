import React from 'react';
import './Menu.css'

const InfoHeader = () => {
  return (
    <div>
        <h1 className="server-title color_white">Titre du Serveur</h1>
        <div>
            <span className="user-status">•</span>
        <p className="username color_white">Nom de l'utilisateur</p>
        </div>
    </div>
  );
};

export default InfoHeader;