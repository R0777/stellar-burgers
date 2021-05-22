import React from 'react';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
  return (
      <header style={{backgroundColor: '#1C1C21'}} className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
          <BurgerIcon type="secondary" /><li className={styles.list_item}>Конструктор</li>
          <ListIcon type="secondary" /><li className={styles.list_item}>Лента заказов</li>
          </ul>
          <Logo />
          <button className={styles.loginBtn}><ProfileIcon type="secondary" />Личный кабинет</button>
        </nav>
      </header>
  );
}

export default AppHeader;
