import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button, CurrencyIcon, DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstructorElement from '../burger-constructor-element/burger-constructor-element'
import styles from './burger-constructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderNumber } from '../../store/slices/orderPopup';


const BurgerConstructor = (props: any) => {

const data = useSelector((store:any) => store.api.data)
const bulki = useSelector((store:any) => store.bulki.bulki)
const order = useSelector((store:any) => store.order.orderId)

const dispatch = useDispatch()

  return (
      <section className={styles.constructor__section}>

        <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }} className={styles.constructor__list}>
        <li className={styles.constructor__list_top}><div><DragIcon type="primary" /></div><ConstructorElement
    text={bulki[0]&&bulki[0].name}
    price={bulki[0]&&bulki[0].price}
    thumbnail={bulki[0]&&bulki[0].image}
    isLocked = {true}
    type="top"
  /></li>

  
        <div className={styles.constructor__list_middle}>
        {data.map((item:any) => <BurgerConstructorElement key={item._id} {...item} />)}
        </div>


        <li className={styles.constructor__list_bottom}><div><DragIcon type="primary" /></div><ConstructorElement
    type="bottom"
    isLocked = {true}
    text={bulki[bulki.length - 1]&&bulki[bulki.length - 1].name}
    price={bulki[bulki.length - 1]&&bulki[bulki.length - 1].price}
    thumbnail={bulki[bulki.length - 1]&&bulki[bulki.length - 1].image}
  /></li>
        </ul>
        <div className={styles.constructror__currency_box}>
          <p className={styles.constructor__currency}>6275</p>
          <div className={styles.constructror__currency_icon}><CurrencyIcon type="primary" /></div>
          <div className={styles.constructror__currency_btn} onClick={() => dispatch(getOrderNumber())}><Button type="primary" size="large">Оформить заказ</Button></div>
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