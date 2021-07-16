import React from 'react';
import Modal from '../modal/modal';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import { BrowserRouter as Router, useHistory, useLocation } from 'react-router-dom';


const ModalSwitch = (props) => {


  const location = useLocation()
  const history = useHistory()


return (
  <>
        <Modal handleClick={props.handleClick} onClose={props.handleClose} title={'Детали ингридиента'} isOpen={props.ingredientPopup}>
          <IngredientPopup />
        </Modal>
  </>
);
}

export default ModalSwitch