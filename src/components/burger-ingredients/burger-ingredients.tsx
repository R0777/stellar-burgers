import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import BurgerBulka from '../burger-bulka/burger-bulka';
import BurgerSous from '../burger-sous/burger-sous';
import BurgerKotleta from '../burger-kotleta/burger-kotleta';

// interface Props {
//   data: [],
//   handleOpenPopup: Function
// }

const BurgerIngredients = (props: any) => {

const [bulka, setBulka] = useState([])
const [kotleta, setKotleta] = useState([])
const [sous, setSous] = useState([])
const [current, setCurrent] = useState('Булки')


  useEffect(() => {
    bulkaParcer(props);
    kotletaParcer(props);
    sousParcer(props);
    }, [props]); 





const bulkaParcer = ((items:any) => {
  const bred = items.data.filter((el:any) => { return el.type === 'bun' })
  setBulka(bred)
  })

  const kotletaParcer = ((items:any) => {
    const kotleta = items.data.filter((el:any) => { return el.type === 'main' })
    setKotleta(kotleta)
  })

  const sousParcer = ((items:any) => {
    const sous = items.data.filter((el:any) => { return el.type === 'sauce' })
    setSous(sous)
  })

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
      {bulka.map((item:any) => <BurgerBulka key={item._id} {...item} openIngredientPopup={props.openIngredientPopup} />)}
      </ul>
    </div>

    <div className={styles.sous__section}>
      <h3 className={styles.sous__title}>Соусы</h3>
      <ul className={styles.sous__grid}>
      {sous.map((item:any) => <BurgerSous key={item._id} {...item} openIngredientPopup={props.openIngredientPopup} />)}
      
      </ul>
    </div>

    <div className={styles.kotleta__section}>
      <h3 className={styles.kotleta__title}>Начинки</h3>
      <ul className={styles.kotleta__grid}>
      {kotleta.map((item:any) => <BurgerKotleta key={item._id} {...item} openIngredientPopup={props.openIngredientPopup} />)}
      </ul>
    </div>
  </div>

  </section>
  );
}

BurgerIngredients.propTypes = {
  openIngredientPopup: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number
  })),
  
}

export default BurgerIngredients;