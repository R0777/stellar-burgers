import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import BurgerBun from '../burger-bun/burger-bun';
import BurgerSauce from '../burger-sauce/burger-sauce';
import BurgerMain from '../burger-main/burger-main';
import { useSelector, useDispatch } from 'react-redux';
import { getBun } from '../../store/slices/get-bun';


const BurgerIngredients = () => {

const [bun, setBun] = useState([])
const [main, setMain] = useState([])
const [sauce, setSauce] = useState([])
const [current, setCurrent] = useState('bun')

const [bunsRef, inViewBuns] = useInView({ threshold: 0, trackVisibility: true, delay: 100 });
const [mainsRef, inViewFilling] = useInView({ threshold: 0, trackVisibility: true, delay: 100 });
const [saucesRef, inViewSauces] = useInView({ threshold: 0, trackVisibility: true, delay: 100 });

const dispatch = useDispatch()
const data = useSelector((state:any) => state.api.data )


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
  const element = document.querySelector('#bun-tab');
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }

  else if (ev.target.closest('#sauce')) {
    const element = document.querySelector('#sauce-tab');
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  
  else {
    const element = document.querySelector('#main-tab');
      if (element) element.scrollIntoView({ behavior: "smooth" });
  }
    
}

const bunParcer = (() => {
  const bred = data.filter((el:any) => { return el.type === 'bun' })
  setBun(bred)
  dispatch(getBun(bred))
  })

  const mainParcer = (() => {
    const main = data.filter((el:any) => { return el.type === 'main' })
    setMain(main)
  })

  const sauceParcer = (() => {
    const sauce = data.filter((el:any) => { return el.type === 'sauce' })
    setSauce(sauce)
  })

  useEffect(() => {
    bunParcer();
    mainParcer();
    sauceParcer();
    }, [data]);


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
      <ul className={styles.bulka__grid} ref={bunsRef} id="bun-tab">
      {bun.map((item:any) => <BurgerBun bun={bun} key={item._id} {...item} />)}
      </ul>
    </div>

    <div className={styles.sous__section}>
      <h3 className={styles.sous__title}>Соусы</h3>
      <ul className={styles.sous__grid} ref={saucesRef} id="sauce-tab">
      {sauce.map((item:any) => <BurgerSauce key={item._id} sauce={sauce} {...item} />)}
      
      </ul>
    </div>
    
    <div className={styles.kotleta__section} ref={mainsRef}>
      <h3 className={styles.kotleta__title}>Начинки</h3>
      <ul className={styles.kotleta__grid} id="main-tab">
      {main.map((item:any) => <BurgerMain key={item._id} main={main} {...item} />)}
      </ul>
    </div>
  </div>

  </section>
  );
}

export default BurgerIngredients;