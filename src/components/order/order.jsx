import React from 'react';
import PropTypes from 'prop-types'
import Bulka from '../../images/one.png'
import styles from './order.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';


const Order = (props) => {

//const profileOrder = useSelector(state => state.profileOrder.)
//const order  = useSelector(state => state.profileOrder)

    return (
      <div className={styles.order__list}>
      <p className={styles.order__list__title}>Состав:</p>
        <ul className={styles.order__list__list}>
          <li className={styles.order__list__item}>
            <div>
            <img src={Bulka} alt='Флюоресцентная булка R2-D3' className={styles.order__list__img} /><p className={styles.order__list__itemname}>Флюоресцентная булка R2-D3</p></div>
            <div className={styles.order__list__icon}><span className={styles.order__list__details}>2 x 200</span><CurrencyIcon type='primary' /></div>
          </li>
        </ul>
        
      </div>
    );
}

export default Order;