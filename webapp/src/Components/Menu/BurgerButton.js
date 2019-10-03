import React from 'react';
import './Menu.css'

// On créer une fonction fléchée avec pour paramètre (ici) fonction et burgerButton
const BurgerButton = ({fonction, burgerButton}) => {
  return (
    <div>
        {/* On récupère la fonction créée dans Menu et on l'applique au clic et on set le className à la valeur de burgerButton */}
      <button onClick={fonction} className={burgerButton}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default BurgerButton;
