import React from 'react';
import PropTypes from 'prop-types'
import styles from './order.module.css'
import { useSelector } from 'react-redux';


const IngredientPopup = (props) => {

const { ingredient }  = useSelector(state => state.ingredients)

    return (
      <>
      <p>Состав:</p>
        <ul>
        </ul>
        
      </>
    );
}


export default IngredientPopup;