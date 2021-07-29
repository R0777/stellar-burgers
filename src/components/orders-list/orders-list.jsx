import React from 'react';
import AygulList from '../moon-flover-list/moon-flower-list'
import styles from './orders-list.module.css'

const OrdersList = () => {

return (
<section>
  <h2 className={styles.orders__title}>Лента заказов</h2>
  <div className={styles.orders}>
    <AygulList />
  </div>
</section>

)

}

export default OrdersList;