import React from 'react';

import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import four from '../../images/four.png'
import five from '../../images/five.png'
import six from '../../images/six.png'
import styles from '../../components/order-list-item/order-list-item.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';

const OrderListItem = (props) => {

  const location = useLocation()

  const order = {
    ingredients: props.ingredients,
    id: props._id,
    status: props.status,
    number: props.number,
    createdAt: props.createdAt,
    updatedAt: props.updatedAt
  }

return (

      <li>
      <Link to={{
              pathname: location.pathname === '/profile/order' ? `/profile/orders/${order.id}` : `/feed/${order.id}`,
              state: {background: location},
      }}><div className={styles.order__item}>
          <div className={styles.order__iddate}>
            <p className={styles.order__id}>#034535</p>
            <p className={styles.order__date}>Сегодня, 16:20 i-GMT+3</p>
          </div>
          <h5 className={styles.order__title}>Death Star Starship Main бургер</h5>
          <p className={styles.order__status}>Создан</p>
          <div className={styles.order__details}>
            <ul className={styles.order__list}>
              <li><img src={five} alt='five' /></li>
              <li><img src={four} alt='four' /></li>
              <li><img src={three} alt='tree' /></li>
              <li><img src={two} alt='two' /></li>
              <li><img src={one} alt='One' /></li>          
            </ul>          
            <p className={styles.order__price}><span>480</span> <CurrencyIcon type="primary" /></p>
          </div>
        </div>
        </Link>
      </li>

)

}

export default OrderListItem;