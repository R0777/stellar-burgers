import React from 'react';
import OrderListItem from '../order-list-item/order-list-item';
import styles from './orders-list.module.css'

const OrdersList = () => {

return (
<section>
  <h2 className={styles.orders__title}>Лента заказов</h2>
  <div className={styles.orders}>
    <ul>
      <OrderListItem />
    </ul>
  </div>
</section>

)

}

export default OrdersList;