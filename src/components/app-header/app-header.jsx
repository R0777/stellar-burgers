import React from 'react';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const AppHeader = () => {

  const location = useLocation()

  const iconColor = () => {

    if (location.pathname === '/profile/order') {
      return 'primary'
    }
    else if (location.pathname === '/profile') {
      return 'primary'
    }
    else return 'secondary'
  }



  return (
      <header className={styles.header}>
        <nav className={styles.header__nav}>

        <input id="header__btn_burger" className={styles.header__btn_burger} type="checkbox" />
        <label htmlFor="header__btn_burger" className={styles.header__btn_menu}>
        <span></span>
        </label>

          <ul className={styles.nav__list}>
            <h4 className={styles.nav__list_title}>Меню</h4>
            <NavLink to="/" activeClassName={location.pathname === '/' && styles.active} className={styles.nav__list_item}>
              <li className={styles.nav__list_li}><div className={styles.nav__icon} ><BurgerIcon type={location.pathname === '/' ? 'primary':'secondary'} /></div>Конструктор</li>
              </NavLink>

            <NavLink to="/feed" activeClassName={location.pathname === '/feed' && styles.active} className={styles.nav__list_item}>
              <li className={styles.nav__list_li}><div className={styles.nav__icon} ><ListIcon type={location.pathname === '/feed' ? 'primary':'secondary'} /></div>Лента заказов</li>
            </NavLink>
          
            <NavLink to="/profile" activeClassName={(location.pathname === '/profile' || '/profile/order') && styles.active} className={styles.nav__list_item}>
              <li className={styles.nav__list_li}><div className={styles.nav__icon} ><ProfileIcon type={iconColor()} /></div>Личный кабинет</li>
              </NavLink>

          </ul>
          <div className={styles.logo}>
            <Logo />
          </div>
        </nav>
      </header>
  );
}

export default AppHeader;
