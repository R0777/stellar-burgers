import React from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstaructorElement from '../burger-constructor-element/burger-constructor-element'
import styles from './burger-constructor.module.css';

// interface Props {
//   food: [],
// }

const BurgerConstaructor = (props) => {

const getPosition = (arr, item) => {
  if (arr.indexOf(item) === 0) {
    return 'top'
  }
  else if (arr.indexOf(item) === arr.length - 1) {
    return 'bottom'
  }
  else return undefined
}


  return (
      <section className={styles.constructor__section}>

        <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }} className={styles.constructor__list}>

        {props.food.map(item => <BurgerConstaructorElement count={getPosition(props.food, item)} key={item._id} {...item} />)}

        </ul>
        <div className={styles.constructror__currency_box}>
          <p className={styles.constructor__currency}>6275</p>
          <div className={styles.constructror__currency_icon}><CurrencyIcon type="primary" /></div>
          <div className={styles.constructror__currency_btn} onClick={props.openAcceptPopup}><Button type="primary" size="large">Оформить заказ</Button></div>
        </div>

      </section>
  );
}

export default BurgerConstaructor;