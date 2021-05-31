import React, { useState } from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-sous.module.css';

// interface Props {
//   key: string,
//   type: string,
//   _id: string,
//   image: string,
//   price: number,
//   name: string
// }

const BurgerSous = ({openIngredientPopup, ...props}) => {

  const ingredient = {
    img: props.image_large,
    name: props.name,
    cal: props.calories,
    prot: props.proteins,
    fat: props.fat,
    carb: props.carbohydrates
    }
    
    const getIngredients = () => {
      openIngredientPopup(ingredient)
    }

  return (
    <li className={styles.sous_item} onClick={getIngredients}>
    <figure className={styles.sous__card}>
    <div className={styles.sous__counter}><Counter count={1} size="default" /></div>
      <img src={props.image} alt={props.name} />
      <div className={styles.currency__info}><p className={styles.currency__text}>{props.price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
      <figcaption className={styles.sous__info}>{props.name}</figcaption>
    </figure>
    </li>
);
}

export default BurgerSous;