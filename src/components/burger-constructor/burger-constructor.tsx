import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';

const BurgerConstaructor = () => {
  return (
      <section className={styles.appheader}>
        <h1>
          Edit and save to reload TEST.
        </h1>
        <a
          className={styles.appheader}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </section>
  );
}

export default BurgerConstaructor;