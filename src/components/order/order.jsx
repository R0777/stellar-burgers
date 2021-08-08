import React from 'react';
import styles from './order.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';


const Order = (props) => {

  const orderPage = useSelector(state => state.orderInfo.order)
  const data = useSelector(state => state.api.data)

  const getPicture = (el) => {
  const ingredient = data.filter(item => item._id === el)
  return ingredient
}

const getAmmount = (elem) => {
  let ammArray = []
  props.order.ingredients.map((el) => {
    if (el === elem) {
      ammArray.push(el)
    }
  })
  return ammArray.length
}

const getUniqueIng = (array) => {
  let uniqueIng = [];
  for (let ing of array) {
      if (!uniqueIng.includes(ing)) {
        uniqueIng.push(ing);
      }
    }
      return uniqueIng
  }


    return (
      <div className={styles.order__list}>
        <h2 className={styles.order__page__title}>{orderPage&&orderPage.name}</h2>
      <p className={styles.order__list__title}>Состав:</p>
        <ul className={styles.order__list__list}>



        {orderPage.ingredients && getUniqueIng(orderPage.ingredients).map((el, index) => <li className={styles.order__list__item} key={index}>
          
          <div>
          <img src={getPicture(el)[0]&&getPicture(el)[0].image_mobile} className={styles.order__ingredient__img} alt={getPicture(el)[0].name} /><p className={styles.order__list__itemname}>{getPicture(el)[0].name}</p></div>
          <div className={styles.order__list__icon}><span className={styles.order__list__details}>{getPicture(el)[0].price}</span><CurrencyIcon type='primary' /></div>
        </li>)}







        {props.order && getUniqueIng(props.order.ingredients).map((el, index) => <li className={styles.order__list__item} key={index}>
          
            <div>
            <img src={getPicture(el)[0]&&getPicture(el)[0].image_mobile} className={styles.order__ingredient__img} alt={getPicture(el)[0].name} /><p className={styles.order__list__itemname}>{getPicture(el)[0].name}</p></div>
            <div className={styles.order__list__icon}><span className={styles.order__list__details}>{getAmmount(el)} x {getPicture(el)[0].price}</span><CurrencyIcon type='primary' /></div>
          </li>)}


        </ul>
        
      </div>
    );
}

export default Order;