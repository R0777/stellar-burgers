import React from 'react';
import { Link } from 'react-router-dom';

import styles from './not-found.module.css';

const NotFound404 = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Опаньки! 404 Error</h1>
          <p>Таких бургеров у нас нет</p>
          <br />
          <br />
          <p>Поищите на <Link to='/' className={styles.link}>основном сайте</Link></p>
        </div>
      </div>
    </div>
  );
}

export default NotFound404;
