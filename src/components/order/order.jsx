import React from 'react';
import styles from './order.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';


const Order = () => {

const data = useSelector(state => state.api.data)
const order  = useSelector(state => state.orderlistPop.order)

const getPicture = (el) => {
  const ingredient = data.filter(item => item._id === el)
  return ingredient
}


    return (
      <div className={styles.order__list}>
      <p className={styles.order__list__title}>Состав:</p>
        <ul className={styles.order__list__list}>
        {order.ingredients&&order.ingredients.map((el, index) => <li className={styles.order__list__item} key={index}>
            <div>
            <img src={getPicture(el)[0]&&getPicture(el)[0].image_mobile} className={styles.order__ingredient__img} alt={getPicture(el)[0].name} /><p className={styles.order__list__itemname}>{getPicture(el)[0].name}</p></div>
            <div className={styles.order__list__icon}><span className={styles.order__list__details}>{getPicture(el)[0].price}</span><CurrencyIcon type='primary' /></div>
          </li>)}
        
        </ul>
        
      </div>
    );
}

export default Order;