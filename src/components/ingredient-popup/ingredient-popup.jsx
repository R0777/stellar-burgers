import React from 'react';
import Popup from '../popup/popup'
import styles from './ingredient-popup.module.css'

const IngredientPopup = (props) => {
    return (
        <Popup
            title={props.title}
            id={props.id}
            isOpen={props.isOpen}
            isClose={props.isClose}>
            <p className="popup__orlogin"></p>
        </Popup>
    );
}

export default IngredientPopup;