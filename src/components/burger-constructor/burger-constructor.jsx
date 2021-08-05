import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import burgBun from '../../images/burgBun.png'
import { Button, CurrencyIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import shortid from 'shortid';
import BurgerConstructorElement from '../burger-constructor-element/burger-constructor-element'
import styles from './burger-constructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderNumber } from '../../store/slices/order-popup';
import { useDrop } from "react-dnd";
import { setBun, setTopMiddle, setTotal } from '../../store/slices/constructor-element';


const BurgerConstructor = () => {

const data = useSelector((store) => store.element.middleElement)
const bun = useSelector((store) => store.element.bredElement)
const total = useSelector((store) => store.element.total)
const idBasket = useSelector((store) => store.element.idBasket)
const logedIn = useSelector((store) => store.loginUser.login)
const history = useHistory()
const dispatch = useDispatch()

const overal = bun.concat(data)

useEffect(() => {
  dispatch(setTotal({bun, data}))
},[dispatch,bun,data])

const authCheck = () => {
  if (!logedIn) {
    history.push('/login')
  } 
  else if (logedIn && overal.length >=2) {

    const basketArray = [...idBasket] 
    basketArray.reverse()
    dispatch(getOrderNumber(basketArray))
  }
}

const [{isHover}, bulTarget] = useDrop({
  accept: "bun",
  drop(item) {
      dispatch(setBun(item));
      
  },
  collect: monitor => ({
      isHover: monitor.isOver(),
  })
});

const [{ middleHover }, middleTarget] = useDrop({
  accept: "middle",
  drop(item) {
      dispatch(setTopMiddle(item));
      
      
  },
  collect: monitor => ({
      middleHover: monitor.isOver(),

  })
});


const [{sortHover}, sortedtopRef] = useDrop({
  accept: "middle",
  drop(item) {
      dispatch(setTopMiddle(item));
      dispatch(setTotal({bun, data}))
  },
  collect: monitor => ({
    sortHover: monitor.isOver(),
  })
});


const filter = isHover ? 'drop-shadow(0px 4px 32px rgba(51, 51, 255, 0.5))' : middleHover ? 'drop-shadow(0px 4px 32px rgba(255, 0, 216, 0.5))': 'none';

  return (
      <section className={styles.constructor__section} ref={bulTarget}>

        <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '16px', filter }} className={styles.constructor__list} >
        <li className={`${styles.constructor__list_top} ${
      sortHover ? styles.onHover : ''}`} ref={sortedtopRef}><ConstructorElement
    text={bun[0]&&bun[0].name}
    price={bun[0]&&bun[0].price}
    thumbnail={bun[0] ? bun[0].image : burgBun}
    isLocked = {true}
    type="top"
  /></li>

  
        <div className={styles.constructor__list_middle} ref={middleTarget}>
        {data.map((item) => <BurgerConstructorElement sort={middleHover} key={shortid.generate()} {...item} />)}
        </div>


        <li className={styles.constructor__list_bottom}><ConstructorElement
    type="bottom"
    isLocked = {true}
    text={bun[0]&&bun[0].name}
    price={bun[0]&&bun[0].price}
    thumbnail={bun[0] ? bun[0].image : burgBun}
  /></li>
        </ul>
        <div className={styles.constructror__currency_box}>
          <p className={styles.constructor__currency}>{total}</p>
          <div className={styles.constructror__currency_icon}><CurrencyIcon type="primary" /></div>
          <div className={styles.constructror__currency_btn} onClick={authCheck}><Button type="primary" size="large">Оформить заказ</Button></div>
        </div>

      </section>
  );
}

export default BurgerConstructor;