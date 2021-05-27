import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-bulka.module.css';
import { data } from '../../utils/data'


const BurgerBulka = () => {

  return (
    <div className={styles.bulka__section}>
      <h3 className={styles.bulka__title}>Булки</h3>
      <div className={styles.bulka__grid}>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={data[0].image} alt={data[0].name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{data[0].price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{data[0].name}</figcaption>
        </figure>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={data[0].image} alt={data[0].name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{data[0].price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{data[0].name}</figcaption>
        </figure>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={data[0].image} alt={data[0].name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{data[0].price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{data[0].name}</figcaption>
        </figure>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={data[0].image} alt={data[0].name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{data[0].price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{data[0].name}</figcaption>
        </figure>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={data[0].image} alt={data[0].name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{data[0].price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{data[0].name}</figcaption>
        </figure>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={data[0].image} alt={data[0].name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{data[0].price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{data[0].name}</figcaption>
        </figure>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default"  /></div>
          <img src={data[0].image} alt={data[0].name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{data[0].price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{data[0].name}</figcaption>
        </figure>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={data[0].image} alt={data[0].name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{data[0].price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{data[0].name}</figcaption>
        </figure>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={data[0].image} alt={data[0].name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{data[0].price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{data[0].name}</figcaption>
        </figure>
        <figure className={styles.bulka__card}>
        <div className={styles.bulka__counter}><Counter count={1} size="default" /></div>
          <img src={data[0].image} alt={data[0].name} />
          <div className={styles.currency__info}><p className={styles.currency__text}>{data[0].price}</p><div className={styles.currency__icon}><CurrencyIcon type='primary' /></div></div>
          <figcaption className={styles.bulka__info}>{data[0].name}</figcaption>
        </figure>
      </div>

    </div>
);
}

export default BurgerBulka;