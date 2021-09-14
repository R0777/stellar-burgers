import React from 'react';
import moment from 'moment';
import 'moment/locale/ru'
import styles from './order-list-item.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { profileOrderPopupToggle, ordersListPopupToggle, setOrder } from '../../store/slices/order-list-popup';
import shortid from 'shortid';

const OrderListItem = (props) => {

  const location = useLocation()
  const dispatch = useDispatch()
  const data = useSelector(state => state.api.data)
  const priceArray = []  

  const order = {
    ingredients: props.order.ingredients,
    id: props.order._id,
    status: props.order.status,
    number: props.order.number,
    name: props.order.name,
    createdAt: new Date(props.order.createdAt),
    updatedAt: props.order.updatedAt,
  }

  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };

  moment.locale('ru')
  const getDays = moment(order.createdAt && order.createdAt).fromNow()


  const orderPrice = (ingredient, priceArray) => {
    priceArray.push(ingredient[0]&&ingredient[0].price)
  }

  const getPicture = (el) => {
    const ingredient = data.filter(item => item._id === el)
    orderPrice(ingredient, priceArray)
    return ingredient
  }

  const amountIngredients = (ingredientArray) => {
    if (order.ingredients.length > 5) {
      
      const objArray = {
        firstArray: order.ingredients.slice(0,5),
        secondArray: order.ingredients.slice(5,(order.ingredients.length))
      }
      return objArray
    }
  }

  const getOrder = () => {
    dispatch(setOrder(order))
    location.pathname === '/feed' ? dispatch(ordersListPopupToggle(true)) : dispatch(profileOrderPopupToggle(true))
    }


return (

      <li>
      <Link onClick={getOrder} className={styles.order__link} to={{
              pathname: location.pathname === '/profile/order' ? `/profile/orders/${order.number}` : `/feed/${order.number}`,
              state: {background: location},
      }}><div className={styles.order__item}>
          <div className={styles.order__iddate}>
            <p className={styles.order__id}>#{order.number}</p>
            <p className={styles.order__date}>{getDays}, {order.createdAt&&order.createdAt.toLocaleString("ru", options)} i-GMT+{order.createdAt&&order.createdAt.getTimezoneOffset()/-60}</p>
          </div>
          <h5 className={styles.order__title}>{order.name}</h5>
          <p className={order.status === 'canceled' ? styles.order__status_canceled : order.status === 'inprogress' ? styles.order__status_done : styles.order__status}>{order.status === 'canceled' ? 'Отменен' : order.status === 'inprogress' ? 'Готовится' : 'Выполнен'}</p>
          <div className={styles.order__details}>
            <ul className={styles.order__list}>

            {order.ingredients.length > 5 && <li key={shortid} style={{width: '65px'}} className={styles.order__ingredient__six}>+{amountIngredients(order.ingredients).secondArray.length}</li>}

            {order.ingredients.length > 5 ? amountIngredients(order.ingredients).firstArray.map(el => <li key={shortid}><img src={getPicture(el)[0]&&getPicture(el)[0].image_mobile} className={styles.order__ingredient__img} alt={getPicture(el).name}/></li>)
            :
            order.ingredients.map(el => <li key={shortid}><img src={getPicture(el)[0]&&getPicture(el)[0].image_mobile} className={styles.order__ingredient__img} alt={getPicture(el).name}/></li>)}

            </ul>          
            <p className={styles.order__price}><span>{(priceArray.reduce((sum, current) => sum + current, 0))/3}</span> <CurrencyIcon type="primary" /></p>
          </div>
        </div>
        </Link>
      </li>

)

}

export default OrderListItem;