import React from 'react';
import OrderListItem from '../order-list-item/order-list-item';
import styles from './orders-list.module.css'
import { useSelector } from 'react-redux';
import shortid from 'shortid';

const OrdersList = () => {

const {orders} = useSelector(state => state.orderlistPop)


return (
<section>
  <h2 className={styles.orders__title}>Лента заказов</h2>
  <div className={styles.orders}>
    <ul>
      {orders.map(el => <OrderListItem order={el} key={shortid} />)}
    </ul>
  </div>
</section>

)

}

export default OrdersList;