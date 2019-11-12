import React from 'react';
import {
  MobileBurgerButton,
  BurgerButtonStick,
} from '../StyledComponents/BurgerButton.style';

// On créer une fonction fléchée avec pour paramètre (ici) fonction et burgerButton
const BurgerButton = ({ fonction, burgerButton }) => {
  return (
    <div>
      {/* On récupère la fonction créée dans Menu et on l'applique au clic et on set le className à la valeur de burgerButton */}
      
        <MobileBurgerButton onClick={fonction}>
          <BurgerButtonStick burgerButton={burgerButton}></BurgerButtonStick>
          <BurgerButtonStick burgerButton={burgerButton}></BurgerButtonStick>
          <BurgerButtonStick burgerButton={burgerButton}></BurgerButtonStick>
        </MobileBurgerButton>
      
    </div>
  );
};

export default BurgerButton;
