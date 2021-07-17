import React from 'react';
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-bun.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientPopupToggle, setIngredient } from '../../store/slices/ingredientPopup';
import { useDrag } from "react-dnd";
import { Link, useLocation } from 'react-router-dom';

const BurgerBun = (props) => {

  const bredArray = useSelector((store) => store.element.bredElement)

  const dispatch = useDispatch()
  const location = useLocation()

  const ingredient = {
    id: props._id,
  ver: null,
  image: props.image_large,
  name: props.name,
  cal: props.calories,
  prot: props.proteins,
  fat: props.fat,
  carb: props.carbohydrates,
  price: props.price
  }

  const usedBredArray = bredArray.length && bredArray.filter((item) => item.name === props.name);

  const amount = usedBredArray ? usedBredArray.length : 0;

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
    <Link to={{
      pathname: `/ingredients/${ingredient.id}`,
      state: {background: location},
    }} className={styles.ingredient__link}><li className={styles.bulka_item} onClick={getIngredients} >
        <figure className={styles.bulka__card} >
        <div className={styles.bulka__counter}>{!!amount && (<Counter count={amount} size="default" />)}</div>
          <img src={props.image} alt={props.name} ref={bulRef}/>
          <div className={styles.currency__info}><p className={styles.currency__text}>{props.price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{props.name}</figcaption>
        </figure>
        </li></Link>
  );
}

BurgerBun.propTypes = {
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
}


export default BurgerBun;