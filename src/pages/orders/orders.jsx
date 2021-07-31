import React, {useEffect} from 'react';
import OrdersList from '../../components/orders-list/orders-list'
import OrdersStatus from '../../components/orders-status/orders-status'
import { WS_CONNECTION_START, WS_CONNECTION_CLOSE } from '../../store/actions/wsActions';
import { useDispatch } from 'react-redux';
import styles from './orders.module.css';


const Orders = () => {

  const dispatch = useDispatch()
  const ALL_ORDERS_URL = 'wss://norma.nomoreparties.space/orders/all'

  useEffect(() => {
    dispatch(WS_CONNECTION_START(ALL_ORDERS_URL));
  
    return () => dispatch(WS_CONNECTION_CLOSE());
  }, [dispatch])

  return (

      <section className={styles.orders}>
        <OrdersList />
        <OrdersStatus />
      </section>

  );
}

export default Orders;