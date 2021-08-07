import React, {useEffect} from 'react';
import styles from './order.module.css'
import { useParams } from 'react-router';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderDetails } from '../../store/slices/get-order-details';


const Order = () => {

  const {id} = useParams();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrderDetails(id))
  },[dispatch])


const data = useSelector(state => state.api.data)


const getPicture = (el) => {
  const ingredient = data.filter(item => item._id === el)
  return ingredient
}

const orderPage = useSelector(state => state.orderInfo.order)
const orderPopup = useSelector(state => state.orderlistPop.order)



    return (
      <div className={styles.order__list}>
      <p className={styles.order__list__title}>Состав:</p>
        <ul className={styles.order__list__list}>
        {orderPopup && orderPopup.ingredients.map((el, index) => <li className={styles.order__list__item} key={index}>
          
            <div>
            <img src={getPicture(el)[0]&&getPicture(el)[0].image_mobile} className={styles.order__ingredient__img} alt={getPicture(el)[0].name} /><p className={styles.order__list__itemname}>{getPicture(el)[0].name}</p></div>
            <div className={styles.order__list__icon}><span className={styles.order__list__details}>{getPicture(el)[0].price}</span><CurrencyIcon type='primary' /></div>
          </li>)}
        
        </ul>
        
      </div>
    );
}

export default Order;