import React from 'react';
import styles from './account-orders.module.css'
import AygulList from '../order-list-profile/order-list-profile'

const AccountOrders = () => {

return (

  <section className={styles.orders}>
    <AygulList />
  </section>

)

}

export default AccountOrders;