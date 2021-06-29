import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-main.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientPopupToggle, setIngredient } from '../../store/slices/ingredientPopup';
import { useDrag } from "react-dnd";
import shortid from 'shortid';

const BurgerMain = (props) => {

  const mainArray = useSelector((store) => store.element.middleElement)

  const dispatch = useDispatch()

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

    const usedMainArray = mainArray.length && mainArray.filter((item) => item.name === props.name);
  
    const amount = usedMainArray ? usedMainArray.length : 0;

    const [, mainRef] = useDrag({
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
    <li className={styles.kotleta_item} onClick={getIngredients}>
    <figure className={styles.kotleta__card}>
    <div className={styles.kotleta__counter}>{!! amount &&<Counter count={amount} size="default" />}</div>
      <img src={props.image} alt={props.name} ref={mainRef} />
      <div className={styles.currency__info}><p className={styles.currency__text}>{props.price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
      <figcaption className={styles.kotleta__info}>{props.name}</figcaption>
    </figure>
    </li>
  );
}

BurgerMain.propTypes = {
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

export default BurgerMain;