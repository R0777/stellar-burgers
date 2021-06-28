import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import burgBun from '../../images/burgBun.png'
import { Button, CurrencyIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import shortid from 'shortid';
import BurgerConstructorElement from '../burger-constructor-element/burger-constructor-element'
import styles from './burger-constructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderNumber } from '../../store/slices/orderPopup';
import { useDrop } from "react-dnd";
import { setBun, setTopMiddle, setTotal } from '../../store/slices/constructor-element';


const BurgerConstructor = () => {

const data = useSelector((store) => store.element.middleElement)
const bun = useSelector((store) => store.element.bredElement)
const total = useSelector((store) => store.element.total)
const idBasket = useSelector((store) => store.element.idBasket)

const dispatch = useDispatch()

useEffect(() => {
  dispatch(setTotal({bun, data}))
},[dispatch,bun,data])

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

        <ul style={{ display: 'flex', flexDirection: 'column', rowGap: '16px', filter }} className={styles.constructor__list}>
        <li className={`${styles.constructor__list_top} ${
      sortHover ? styles.onHover : ''}`} ref={sortedtopRef}><ConstructorElement
    text={bun&&bun[0].name}
    price={bun&&bun[0].price}
    thumbnail={bun[0].image ? bun[0].image : burgBun}
    isLocked = {true}
    type="top"
  /></li>

  
        <div className={styles.constructor__list_middle} ref={middleTarget}>
        {data.map((item) => <BurgerConstructorElement sort={middleHover} key={shortid.generate()} {...item} />)}
        </div>


        <li className={styles.constructor__list_bottom}><ConstructorElement
    type="bottom"
    isLocked = {true}
    text={bun&&bun[0].name}
    price={bun&&bun[0].price}
    thumbnail={bun[0].image ? bun[0].image : burgBun}
  /></li>
        </ul>
        <div className={styles.constructror__currency_box}>
          <p className={styles.constructor__currency}>{total}</p>
          <div className={styles.constructror__currency_icon}><CurrencyIcon type="primary" /></div>
          <div className={styles.constructror__currency_btn} onClick={() => dispatch(getOrderNumber(idBasket))}><Button type="primary" size="large">Оформить заказ</Button></div>
        </div>

      </section>
  );
}

BurgerConstructor.propTypes = {
  openAcceptPopup: PropTypes.func,
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

export default BurgerConstructor;