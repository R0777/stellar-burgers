import React from 'react';
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-bun.module.css';
import { useDispatch } from 'react-redux';
import { ingredientPopupToggle, setIngredient } from '../../store/slices/ingredientPopup';
import { useDrag } from "react-dnd";

const BurgerBun = (props: any) => {

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

  const [, bulRef] = useDrag({
    type: "bun",
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
    <li className={styles.bulka_item} onClick={getIngredients} >
        <figure className={styles.bulka__card} >
        <div className={styles.bulka__counter}><Counter count={props.bun.length} size="default" /></div>
          <img src={props.image} alt={props.name} ref={bulRef}/>
          <div className={styles.currency__info}><p className={styles.currency__text}>{props.price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{props.name}</figcaption>
        </figure>
        </li>
  );
}

BurgerBun.propTypes = {
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
  })),
}



export default BurgerBun;