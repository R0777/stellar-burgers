import React from 'react';
import styles from './account-orders.module.css'
import OrderListItem from '../order-list-profile/order-list-profile'
import shortid from 'shortid';


const AccountOrders = ({orders}) => {

return (

  <section className={styles.orders}>
    <ul>
      {orders.map(el => <OrderListItem order={el} key={shortid} />)}
    </ul>
  </section>

)

}

export default AccountOrders;