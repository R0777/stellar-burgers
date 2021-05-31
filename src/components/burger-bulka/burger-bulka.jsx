import React, {useEffect} from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-bulka.module.css';

// interface Props {
//   key: string,
//   image: string,
//   price: number,
//   name: string
// }



const BurgerBulka = ({openIngredientPopup, ...props}) => {

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
        <li className={styles.bulka_item} onClick={getIngredients}>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={props.image} alt={props.name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{props.price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{props.name}</figcaption>
        </figure>
        </li>
  );
}

export default BurgerBulka;