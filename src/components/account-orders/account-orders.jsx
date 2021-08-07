import React, {useEffect} from 'react';
import styles from './account-orders.module.css'
import OrderListItem from '../order-list-profile/order-list-profile'
import { useDispatch, useSelector } from 'react-redux';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSE } from '../../store/actions/wsActions';
import { getCookie } from '../../utils/cookie';
import shortid from 'shortid';


const AccountOrders = () => {

  const dispatch = useDispatch()

  const PROFILE_ORDERS_URL = 'wss://norma.nomoreparties.space/orders'

  useEffect(() => {
    dispatch(WS_CONNECTION_START(`${PROFILE_ORDERS_URL}?token=${getCookie('token')}`));
  
    return () => dispatch(WS_CONNECTION_CLOSE());
  }, [dispatch])


  const {orders} = useSelector(state => state.orderlistPop)

return (

  <section className={styles.orders}>
    <ul>
      {orders&&orders.map(el => <OrderListItem order={el} key={shortid} />)}
    </ul>
  </section>

)

}

export default AccountOrders;