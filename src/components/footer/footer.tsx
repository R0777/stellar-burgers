import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './footer.module.css';

const Footer = () => {
  return (
      <footer className={styles.appheader}>
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
      </footer>
  );
}

export default Footer;