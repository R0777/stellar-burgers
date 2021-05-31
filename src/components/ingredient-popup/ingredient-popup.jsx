import React from 'react';
import Popup from '../popup/popup'
import styles from './ingredient-popup.module.css'

const IngredientPopup = (props) => {
    return (
      <Popup
        isOpen={props.isOpen}
        isClose={props.isClose}>
        
        <h5 className={styles.popup__title}>Детали ингридиента</h5>
        <img src={props.foodDetails&&props.foodDetails.img} className={styles.ingredient__img} alt="Фкусняшка"/>
        <p className={styles.ingredient__name}>{props.foodDetails&&props.foodDetails.name}</p>
        <div className={styles.ingredient__details}>
        <p className={styles.ingredient__cal}>Калории
        <span className="text text_type_digits-default">{props.foodDetails&&props.foodDetails.cal}</span></p>
        <p className={styles.ingredient__cal}>Белки,г
        <span className="text text_type_digits-default">{props.foodDetails&&props.foodDetails.prot}</span></p>
        <p className={styles.ingredient__cal}>Жиры,г
        <span className="text text_type_digits-default">{props.foodDetails&&props.foodDetails.fat}</span></p>
        <p className={styles.ingredient__cal}>Углеводы,г
        <span className="text text_type_digits-default">{props.foodDetails&&props.foodDetails.carb}</span></p>
        </div>
      </Popup>
    );
}

export default IngredientPopup;