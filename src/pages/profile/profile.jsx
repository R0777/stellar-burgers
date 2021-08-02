import React, {useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './profile.module.css'
import Account from '../account/account';
import AccountOrders from '../../components/account-orders/account-orders';
import { logout } from '../../store/slices/logout';
import { useDispatch, useSelector } from 'react-redux';
import { getCookie } from '../../utils/cookie';
import { WS_CONNECTION_START, WS_CONNECTION_CLOSE } from '../../store/actions/wsActions';

const Profile = () => {

  const dispatch = useDispatch()
  const location = useLocation()

  const PROFILE_ORDERS_URL = 'wss://norma.nomoreparties.space/orders'

  useEffect(() => {
    dispatch(WS_CONNECTION_START(`${PROFILE_ORDERS_URL}?token=${getCookie('token')}`));
  
    return () => dispatch(WS_CONNECTION_CLOSE());
  }, [dispatch])


  const {orders} = useSelector(state => state.orderlistPop)

  const logoutHandler = () => {
    dispatch(logout(getCookie('refreshToken')))
  }

  return(
    <section className={styles.profile}>
      <nav className={styles.profile__nav}>
        <Link className={location.pathname === '/profile' ? styles.profile__link_white : styles.profile__link} to='/profile'>Профиль</Link>
        <Link className={location.pathname === '/profile/order' ? styles.profile__link_white : styles.profile__link} to='/profile/order'>История заказов</Link>
        <Link className={styles.profile__link} to='/' onClick={logoutHandler}>Выход</Link>
        <p className={styles.profile__text}>В этом разделе вы можете изменить свои персональные данные?</p>
      </nav>

      {location.pathname === '/profile' ? <Account /> : <AccountOrders orders={orders} /> }

    </section>
  )
}


export default Profile;