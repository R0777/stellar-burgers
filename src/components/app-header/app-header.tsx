import React from 'react';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {

  return (
      <header className={styles.header}>
        <nav className={styles.header__nav}>

        <input id="header__btn_burger" className={styles.header__btn_burger} type="checkbox" />
        <label htmlFor="header__btn_burger" className={styles.header__btn_menu}>
        <span></span>
        </label>

          <ul className={styles.nav__list}>
            <h4 className={styles.nav__list_title}>Меню</h4>
            <li className={styles.nav__list_item}>
              <div className={styles.nav__icon}><BurgerIcon type="secondary" /></div>Конструктор</li>

            <li className={styles.nav__list_item}><div className={styles.nav__icon}><ListIcon type="secondary" /></div>Лента заказов</li>
          
            <li className={styles.nav__list_item}><div className={styles.nav__icon}><ProfileIcon type="secondary" /></div>Личный кабинет</li>

          </ul>
          <div className={styles.logo}>
            <Logo />
          </div>
        </nav>
      </header>
  );
}

export default AppHeader;
