import React from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstaructor from '../burger-constructor/burger-constructor';
import styles from './main.module.css';
import { data } from '../../utils/data'

// interface Food {
// food: {
  
// }
// }

const Main = () => {

  return (
    <main className={styles.main}>
    <BurgerIngredients food={data} />
    <BurgerConstaructor food={data} />
  </main>
  );
}

export default Main;