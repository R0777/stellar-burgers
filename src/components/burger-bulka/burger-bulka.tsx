import React from 'react';
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-bulka.module.css';
import { useDispatch } from 'react-redux';
import { ingredientPopupToggle, setIngredient } from '../../store/slices/ingredientPopup';
import { useDrag } from "react-dnd";

const BurgerBulka = (props: any) => {

  //const {_id, ...props} = props;

  const dispatch = useDispatch()

  const ingredient = {
  image: props.image_large,
  name: props.name,
  cal: props.calories,
  prot: props.proteins,
  fat: props.fat,
  carb: props.carbohydrates,
  price: props.price
  }

  const [{isDrag}, bulRef] = useDrag({
    type: "bul",
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
    <li className={styles.bulka_item} onClick={getIngredients} ref={bulRef}>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={props.image} alt={props.name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{props.price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{props.name}</figcaption>
        </figure>
        </li>
  );
}

BurgerBulka.propTypes = {
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
    openIngredientPopup: PropTypes.func,
  })),
}



export default BurgerBulka;