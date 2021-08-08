import React from 'react';
import styles from './account-orders.module.css'
import OrderListItem from '../order-list-profile/order-list-profile'
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';


const AccountOrders = () => {

  const dispatch = useDispatch()

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