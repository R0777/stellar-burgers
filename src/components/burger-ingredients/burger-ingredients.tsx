import React, { useState, useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";
import PropTypes from 'prop-types';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import BurgerBulka from '../burger-bulka/burger-bulka';
import BurgerSous from '../burger-sous/burger-sous';
import BurgerKotleta from '../burger-kotleta/burger-kotleta';
import { useSelector, useDispatch } from 'react-redux';
import { getBulki } from '../../store/slices/get-bulki'

const BurgerIngredients = (props: any) => {

const [bulka, setBulka] = useState([])
const [kotleta, setKotleta] = useState([])
const [sous, setSous] = useState([])
const [current, setCurrent] = useState('bun')


const [bunsRef, inViewBuns] = useInView({ threshold: 0, trackVisibility: true, delay: 100 });
const [mainsRef, inViewFilling] = useInView({ threshold: 0, trackVisibility: true, delay: 100 });
const [saucesRef, inViewSauces] = useInView({ threshold: 0, trackVisibility: true, delay: 100 });

const dispatch = useDispatch()
const data = useSelector((state:any) => state.api.data )


  useEffect(() => {
    bulkaParcer();
    kotletaParcer();
    sousParcer();
    }, [data]);

    useEffect(() => { 
      if (inViewBuns) {
        
        setCurrent('bun');
      }
      else if (inViewSauces) {
    
        setCurrent('sauce');
      }
      else if (inViewFilling) {
        setCurrent('main');
      }
    }, [inViewBuns, inViewFilling, inViewSauces]);

const setTab = (ev:any) => {

  if (ev.target.closest('#bun')) {
  const element = document.querySelector('#bulka');
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  else if (ev.target.closest('#sauce')) {
    const element = document.querySelector('#sous');
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  
  else {
    const element = document.querySelector('#kotleta');
      if (element) element.scrollIntoView({ behavior: "smooth" });
  }
    
}

const bulkaParcer = (() => {
  const bred = data.filter((el:any) => { return el.type === 'bun' })
  setBulka(bred)
  dispatch(getBulki(bred))
  })

  const kotletaParcer = (() => {
    const kotleta = data.filter((el:any) => { return el.type === 'main' })
    setKotleta(kotleta)
  })

  const sousParcer = (() => {
    const sous = data.filter((el:any) => { return el.type === 'sauce' })
    setSous(sous)
  })

  return (
  <section className={styles.ingredients__section}>
    <h2 className={styles.ingredients__title}>Соберите бургер</h2>
    <div style={{ display: 'flex' }} className={styles.tab__menu}>

      <div onClick={setTab} id="bun">
      <Tab value="bun" active={current==='bun'} onClick={setCurrent}>
      Булки
      </Tab>
      </div>

      <div onClick={setTab} id="sauce">
      <Tab value="sauce" active={current==='sauce'} onClick={setCurrent}>
      Соусы
      </Tab>
      </div>

      <div onClick={setTab} id="main">
      <Tab value="main" active={current==='main'} onClick={setCurrent}>
      Начинки
      </Tab>
      </div>
      
    </div>

    <div className={styles.ingredients__list}>
    <div className={styles.bulka__section}>
      <h3 className={styles.bulka__title}>Булки</h3>
      <ul className={styles.bulka__grid} ref={bunsRef} id="bulka">
      {bulka.map((item:any) => <BurgerBulka key={item._id} {...item} openIngredientPopup={props.openIngredientPopup} />)}
      </ul>
    </div>

    <div className={styles.sous__section}>
      <h3 className={styles.sous__title}>Соусы</h3>
      <ul className={styles.sous__grid} ref={saucesRef} id="sous">
      {sous.map((item:any) => <BurgerSous key={item._id} {...item} openIngredientPopup={props.openIngredientPopup} />)}
      
      </ul>
    </div>
    
    <div className={styles.kotleta__section} ref={mainsRef}>
      <h3 className={styles.kotleta__title}>Начинки</h3>
      <ul className={styles.kotleta__grid} id="kotleta">
      {kotleta.map((item:any) => <BurgerKotleta key={item._id} {...item} openIngredientPopup={props.openIngredientPopup} />)}
      </ul>
    </div>
  </div>

  </section>
  );
}

BurgerIngredients.propTypes = {
  openIngredientPopup: PropTypes.func,
  getBulka: PropTypes.func,
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