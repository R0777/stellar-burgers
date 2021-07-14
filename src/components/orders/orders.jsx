import React from 'react';
import OrdersList from '../orders-list/orders-list'
import OrdersStatus from '../orders-status/orders-status'
import styles from './orders.module.css';


const Orders = () => {

  return (

      <section className={styles.orders}>
        <OrdersList />
        <OrdersStatus />
      </section>

  );
}

export default Orders;