import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-bulka.module.css';

// interface Props {
//   key: string,
//   image: string,
//   price: number,
//   name: string
// }

const BurgerBulka = (props) => {

  return (
        <li key={props.key} className={styles.bulka_item} onClick={props.openIngredientPopup}>
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