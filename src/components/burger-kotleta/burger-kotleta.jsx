import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-kotleta.module.css';
import { useDispatch } from 'react-redux';
import { ingredientPopupToggle, setIngredient } from '../../store/slices/ingredientPopup';
import { useDrag } from "react-dnd";

const BurgerKotleta = (props) => {

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

    const [{isDrag}, kotletaRef] = useDrag({
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
    <div className={styles.kotleta__counter}><Counter count={props.kotleta.length} size="default" /></div>
      <img src={props.image} alt={props.name} ref={kotletaRef} />
      <div className={styles.currency__info}><p className={styles.currency__text}>{props.price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
      <figcaption className={styles.kotleta__info}>{props.name}</figcaption>
    </figure>
    </li>
  );
}

export default BurgerKotleta;