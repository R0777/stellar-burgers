import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-kotleta.module.css';

interface Props {
  key: string,
  type: string,
  _id: string,
  image: string,
  price: number,
  name: string
}

const BurgerKotleta: React.FC<Props> = (props) => {

  return (
    <li key={props.key} className={styles.kotleta_item}>
    <figure className={styles.kotleta__card}>
    <div className={styles.kotleta__counter}><Counter count={1} size="default" /></div>
      <img src={props.image} alt={props.name} />
      <div className={styles.currency__info}><p className={styles.currency__text}>{props.price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
      <figcaption className={styles.kotleta__info}>{props.name}</figcaption>
    </figure>
    </li>
  );
}

export default BurgerKotleta;