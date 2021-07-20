import React from 'react';
import PropTypes from 'prop-types'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-sauce.module.css';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { ingredientPopupToggle, setIngredient } from '../../store/slices/ingredientPopup';
import { useDrag } from "react-dnd";
import { Link, useLocation } from 'react-router-dom';

const BurgerSauce = (props) => {

  const sauceArray = useSelector((store) => store.element.middleElement)

  const dispatch = useDispatch()
  const location = useLocation()

  const ingredient = {
    id: props._id,
    ver: shortid.generate(),
    image: props.image_large,
    name: props.name,
    cal: props.calories,
    prot: props.proteins,
    fat: props.fat,
    carb: props.carbohydrates,
    price: props.price
    }

    const usedSauceArray = sauceArray.length && sauceArray.filter((item) => item.name === props.name);
  
    const amount = usedSauceArray ? usedSauceArray.length : 0;

    const [, sauceRef] = useDrag({
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
    <Link to={{
      pathname: `/ingredients/${ingredient.id}`,
      state: {background: location},
    }} className={styles.ingredient__link}><li className={styles.sous_item} onClick={getIngredients}>
    <figure className={styles.sous__card}>
    <div className={styles.sous__counter}>{!! amount && (<Counter count={amount} size="default" />)}</div>
      <img src={props.image} alt={props.name} ref={sauceRef}/>
      <div className={styles.currency__info}><p className={styles.currency__text}>{props.price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
      <figcaption className={styles.sous__info}>{props.name}</figcaption>
    </figure>
    </li></Link>
);
}

BurgerSauce.propTypes = {
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

export default BurgerSauce;