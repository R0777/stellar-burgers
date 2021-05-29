import React, { useState, useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import BurgerBulka from '../burger-bulka/burger-bulka';
import BurgerSous from '../burger-sous/burger-sous';
import BurgerKotleta from '../burger-kotleta/burger-kotleta';

interface Props {
  food: []
}

const BurgerIngredients: React.FC<Props> = (props) => {

const [bulka, setBulka] = useState([])
const [kotleta, setKotleta] = useState([])
const [sous, setSous] = useState([])


  useEffect(() => {
  
    bulkaParcer(props);
    kotletaParcer(props);
    sousParcer(props);
    }, []); 



  const [current, setCurrent] = React.useState('Булки')

const bulkaParcer = (items: {food: []}) => {
  console.log(items)
  const bred = items.food.filter((el: {type: string}) => { return el.type === 'bun' })
  setBulka(bred)
  }

  const kotletaParcer = (items: {food: []}) => {
    const kotleta = items.food.filter((el: {type: string}) => { return el.type === 'main' })
    setKotleta(kotleta)
  }

  const sousParcer = (items: {food: []}) => {
    const sous = items.food.filter((el: {type: string}) => { return el.type === 'sauce' })
    setSous(sous)
  }

  return (
  <section className={styles.ingredients__section}>
    <h2 className={styles.ingredients__title}>Соберите бургер</h2>
    <div style={{ display: 'flex' }} className={styles.tab__menu}>
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
    <div className={styles.bulka__section}>
      <h3 className={styles.bulka__title}>Булки</h3>
      <ul className={styles.bulka__grid}>
      {bulka.map((item: {_id: string, price: number, image: string, name: string}) => <BurgerBulka key={item._id} {...item} />)}
      </ul>
    </div>

    <div className={styles.sous__section}>
      <h3 className={styles.sous__title}>Соусы</h3>
      <ul className={styles.sous__grid}>
      {sous.map((item: {_id: string, price: number, image: string, name: string, type: string}) => <BurgerSous key={item._id} {...item} />)}
      
      </ul>
    </div>

    <div className={styles.kotleta__section}>
      <h3 className={styles.kotleta__title}>Начинки</h3>
      <ul className={styles.kotleta__grid}>
      {kotleta.map((item: {_id: string, price: number, image: string, name: string, type: string}) => <BurgerKotleta key={item._id} {...item} />)}
      </ul>
    </div>
  </div>

  </section>
  );
}

export default BurgerIngredients;