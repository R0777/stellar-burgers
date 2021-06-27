import React from 'react';
import PropTypes from 'prop-types'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-sous.module.css';
import { useDispatch } from 'react-redux';
import { ingredientPopupToggle, setIngredient } from '../../store/slices/ingredientPopup';
import { useDrag } from "react-dnd";

const BurgerSous = (props: any) => {

  const dispatch = useDispatch()

  const ingredient = {
    id: props._id,
    image: props.image_large,
    name: props.name,
    cal: props.calories,
    prot: props.proteins,
    fat: props.fat,
    carb: props.carbohydrates,
    price: props.price
    }

    const [{isDrag}, sousRef] = useDrag({
      type: "middle",
      item: ingredient,
      collect: monitor => ({
        isDrag: monitor.isDragging()
    })
  });
    
    const getIngredients = () => {
      dispatch(setIngredient(ingredient))
      dispatch(ingredientPopupToggle(true))
    }

  return (
    <li className={styles.sous_item} onClick={getIngredients}>
    <figure className={styles.sous__card}>
    <div className={styles.sous__counter}><Counter count={props.sous.length} size="default" /></div>
      <img src={props.image} alt={props.name} ref={sousRef}/>
      <div className={styles.currency__info}><p className={styles.currency__text}>{props.price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
      <figcaption className={styles.sous__info}>{props.name}</figcaption>
    </figure>
    </li>
);
}

BurgerSous.propTypes = {
  
  props: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number,
    openIngredientPopup: PropTypes.func
    
  })),

}

export default BurgerSous;