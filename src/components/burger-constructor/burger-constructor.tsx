import React from 'react';
import PropTypes from 'prop-types';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorElement from '../burger-constructor-element/burger-constructor-element'
import styles from './burger-constructor.module.css';

// interface Props {
//   food: [],
// }

const BurgerConstructor = (props: any) => {

const getPosition = (arr:any, item:any) => {
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

        {props.data.map((item:any) => <BurgerConstructorElement count={getPosition(props.data, item)} key={item._id} {...item} />)}

        </ul>
        <div className={styles.constructror__currency_box}>
          <p className={styles.constructor__currency}>6275</p>
          <div className={styles.constructror__currency_icon}><CurrencyIcon type="primary" /></div>
          <div className={styles.constructror__currency_btn} onClick={props.openAcceptPopup}><Button type="primary" size="large">Оформить заказ</Button></div>
        </div>

      </section>
  );
}

BurgerConstructor.propTypes = {
  openAcceptPopup: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
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
    __v: PropTypes.number
    
  })),
  
}

export default BurgerConstructor;