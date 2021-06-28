import React from 'react';
import Popup from '../popup/popup'
import styles from './ingredient-popup.module.css'
import { useSelector } from 'react-redux';
import { ingredientPopupToggle } from '../../store/slices/ingredientPopup';

const IngredientPopup = () => {

const { ingredientPopup, ingredient }  = useSelector(state => state.ingredients)

    return (
      <Popup
        isOpen={ingredientPopup}
        isClose={ingredientPopupToggle}>
        
        <h5 className={styles.popup__title}>Детали ингридиента</h5>
        <img src={ingredient && ingredient.image} className={styles.ingredient__img} alt="Фкусняшка"/>
        <p className={styles.ingredient__name}>{ingredient && ingredient.name}</p>
        <div className={styles.ingredient__details}>
        <p className={styles.ingredient__cal}>Калории
        <span className="text text_type_digits-default">{ingredient && ingredient.cal}</span></p>
        <p className={styles.ingredient__cal}>Белки,г
        <span className="text text_type_digits-default">{ingredient && ingredient.prot}</span></p>
        <p className={styles.ingredient__cal}>Жиры,г
        <span className="text text_type_digits-default">{ingredient && ingredient.fat}</span></p>
        <p className={styles.ingredient__cal}>Углеводы,г
        <span className="text text_type_digits-default">{ingredient && ingredient.carb}</span></p>
        </div>
      </Popup>
    );
}

export default IngredientPopup;