import React from 'react';
import PropTypes from 'prop-types'
import styles from './ingredient-popup.module.css'
import { useSelector } from 'react-redux';


const IngredientPopup = (props) => {

const { ingredient }  = useSelector(state => state.ingredients)

    return (
      <>
        <img src={props.ingredient ? props.ingredient.image_large : ingredient.image} className={styles.ingredient__img} alt="Фкусняшка"/>
        <p className={styles.ingredient__name}>{props.ingredient ? props.ingredient.name : ingredient.name}</p>
        <div className={styles.ingredient__details}>
        <p className={styles.ingredient__cal}>Калории
        <span className="text text_type_digits-default">{props.ingredient ? props.ingredient.calories : ingredient.cal}</span></p>
        <p className={styles.ingredient__cal}>Белки,г
        <span className="text text_type_digits-default">{props.ingredient ? props.ingredient.proteins : ingredient.prot}</span></p>
        <p className={styles.ingredient__cal}>Жиры,г
        <span className="text text_type_digits-default">{props.ingredient ? props.ingredient.fat : ingredient.fat}</span></p>
        <p className={styles.ingredient__cal}>Углеводы,г
        <span className="text text_type_digits-default">{props.ingredient ? props.ingredient.carbohydrates : ingredient.carb}</span></p>
        </div>
      </>
    );
}

IngredientPopup.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image_large: PropTypes.string,

}

export default IngredientPopup;