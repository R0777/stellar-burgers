import React, {useEffect} from 'react';
import OrderListItem from '../order-list-item/order-list-item';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../utils/cookie';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSE } from '../../store/actions/wsActions';

const OrderListProfile = () => {

const dispatch = useDispatch()
const WS_URL = 'wss://norma.nomoreparties.space/orders'

useEffect(() => {
  dispatch(WS_CONNECTION_START(`${WS_URL}?token=${getCookie('token')}`));

  return () => dispatch(WS_CONNECTION_CLOSE());
}, [dispatch])


  return (
    <ul>
      <OrderListItem />
    </ul>
  )
}

export default OrderListProfile;