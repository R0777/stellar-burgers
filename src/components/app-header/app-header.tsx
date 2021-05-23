import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
  return (
      <header style={{backgroundColor: '#1C1C21'}} className={styles.header}>
        <nav className={styles.header__nav}>
          <ul className={styles.nav__list}>
          <div className={styles.nav__list_block}>
            <li className={styles.nav__list_item}><BurgerIcon type="secondary" />Конструктор</li>
            <li className={styles.nav__list_item}><ListIcon type="secondary" />Лента заказов</li>
          </div>
          <Logo />
            <li className={styles.nav__list_item}><ProfileIcon type="secondary" />Личный кабинет</li>
          </ul>
          
        </nav>
      </header>
  );
}

export default AppHeader;
