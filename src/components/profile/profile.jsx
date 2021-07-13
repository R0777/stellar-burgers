import React from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './profile.module.css'
import Account from '../account/account';
import AccountOrders from '../account-orders/account-orders';
import { logout } from '../../store/slices/logout';
import { useDispatch } from 'react-redux';
import { getCookie } from '../../utils/cookie';

const Profile = (props) => {

  const dispatch = useDispatch()

  const location = useLocation()

  const logoutHandler = () => {
    dispatch(logout(getCookie('refreshToken')))
  }


  return(
    <section className={styles.profile}>
      <nav className={styles.profile__nav}>
        <NavLink className={styles.profile__link} activeStyle={{ color: "#f2f2f3" }} to='/profile'>Профиль</NavLink>
        <NavLink className={styles.profile__link} activeStyle={{ color: "#f2f2f3" }} to='/profile/order'>История заказов</NavLink>
        <Link className={styles.profile__link} to='/' onClick={logoutHandler}>Выход</Link>
        <p className={styles.profile__text}>В этом разделе вы можете изменить свои персональные данные?</p>
      </nav>

  {/* <Router>
    <Switch>
      <Route path="/profile" exact='true'>
        <Account />
      </Route>

      <Route path="/profile/order" exact='true'>
        <AccountOrders />
      </Route>
    </Switch>
  </Router> */}

      {/* {location.pathname === '/profile' ? <Account /> : <AccountOrders /> } */}

      {location.pathname === '/profile' && <Account /> }

      {location.pathname === '/profile/order' && <AccountOrders /> }
    </section>
  )
}

// Profile.propTypes = {   onClose: PropTypes.func.isRequired,   title:
// PropTypes.string,   handleClick: PropTypes.func.isRequired,   isOpen:
// PropTypes.bool.isRequired,   children:PropTypes.element.isRequired }

export default Profile;