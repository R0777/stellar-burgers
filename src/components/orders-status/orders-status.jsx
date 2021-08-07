import React from 'react';
import { useSelector } from 'react-redux';
import styles from './orders-status.module.css'
import shortid from 'shortid';


const OrdersStatus = () => {

  const {orders, total, dailyTotal} = useSelector(state => state.orderlistPop)

return (

  <section className={styles.orders__status}>

    <div className={styles.orders__progress}>
    <div className={styles.orders__done}>
      <h5 className={styles.orders__progress_title}>Готовы:</h5>
        <ul style={{height: '140px', overflow: 'hidden'}}>
          {orders.map(el => el.status === 'done' && <li key={shortid}>{el.number}</li>)}
        </ul>
      </div> 

      <div className={styles.orders__inprogress}>
        <h5 className={styles.orders__progress_title}>В работе:</h5>
          <ul>
          {orders.map(el => el.status === 'undone' && <li>{el.number}</li>)}
          </ul>
      </div> 
    </div> 

<h5 className={styles.orders__done_overal}>Выполнено за все время:</h5>
<div className={styles.orders__done_overal_number}>{total}</div>

<h5 className={styles.orders__done_today}>Выполнено за сегодня:</h5>
<div className={styles.orders__done_today_number}>{dailyTotal}</div>

  </section>

)

}

export default OrdersStatus;