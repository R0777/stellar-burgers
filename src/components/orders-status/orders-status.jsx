import React from 'react';
import styles from './orders-status.module.css'
const OrdersStatus = (props) => {

return (

  <section className={styles.orders__status}>

    <div className={styles.orders__progress}>
    <div className={styles.orders__done}>
      <h5 className={styles.orders__progress_title}>Готовы:</h5>
        <ul>
          <li>034533</li>
          <li>034532</li>
          <li>034531</li>
          <li>034530</li>
          <li>034529</li>
        </ul>
      </div> 

      <div className={styles.orders__inprogress}>
      <h5 className={styles.orders__progress_title}>В работе:</h5>
      <ul>
          <li>034538</li>
          <li>034541</li>
          <li>034542</li>
        </ul>
      </div> 
    </div> 

<h5 className={styles.orders__done_overal}>Выполнено за все время:</h5>
<div className={styles.orders__done_overal_number}>28 752</div>

<h5 className={styles.orders__done_today}>Выполнено за сегодня:</h5>
<div className={styles.orders__done_today_number}>138</div>

  </section>

)

}

// Register.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   title: PropTypes.string,
//   handleClick: PropTypes.func.isRequired,
//   isOpen: PropTypes.bool.isRequired,
//   children:PropTypes.element.isRequired
// }

export default OrdersStatus;