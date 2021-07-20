import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './profile.module.css'
import Account from '../../pages/account/account';
import AccountOrders from '../account-orders/account-orders';
import { logout } from '../../store/slices/logout';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../utils/cookie';

const Profile = () => {

  const dispatch = useDispatch()

  const location = useLocation()

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

      {location.pathname === '/profile' ? <Account /> : <AccountOrders /> }

    </section>
  )
}


export default Profile;