import React from 'react';
import styles from './modal-switch.module.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import IngredientPopup from '../ingredient-popup/ingredient-popup';

const ModalSwitch = () => {

  const {id} = useParams();  
  
  const data = useSelector(state => state.api.data)

  const ingredient = data.find(item => item._id === id)

    return (
      <div className={styles.switch}> 
        <IngredientPopup ingredient={ingredient} />
      </div>
    );
}

export default ModalSwitch;