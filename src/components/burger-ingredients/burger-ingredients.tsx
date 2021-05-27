import React, { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import BurgerBulka from '../burger-bulka/burger-bulka';
import BurgerSous from '../burger-sous/burger-sous';
import BurgerKotleta from '../burger-kotleta/burger-kotleta';

const BurgerIngredients = () => {

  const [current, setCurrent] = React.useState('one')

  return (
      <section className={styles.ingredients__section}>
        <h2 className={styles.ingredients__title}>Соберите бургер</h2>
        <div style={{ display: 'flex', marginBottom: '40px' }}>
      <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
      Булки
      </Tab>
      <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
      Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
      Начинки
      </Tab>
    </div>
<div className={styles.ingredients__list}>
<BurgerBulka />
<BurgerSous />
<BurgerKotleta />
</div>
      </section>
  );
}

export default BurgerIngredients;