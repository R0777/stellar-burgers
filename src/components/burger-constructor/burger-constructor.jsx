import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button, CurrencyIcon, DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import shortid from 'shortid';
import BurgerConstructorElement from '../burger-constructor-element/burger-constructor-element'
import styles from './burger-constructor.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getOrderNumber } from '../../store/slices/orderPopup';
import { useDrop } from "react-dnd";
import { setBulki, setTopMiddle, setTotal, sortConstructor } from '../../store/slices/constructor-element';


const BurgerConstructor = () => {

const data = useSelector((store) => store.element.middleElement)
const bulki = useSelector((store) => store.element.bredElement)
const total = useSelector((store) => store.element.total)
const idBasket = useSelector((store) => store.element.idBasket)

const dispatch = useDispatch()


useEffect(() => {
  dispatch(setTotal({bulki, data}))
},[dispatch, bulki, data])


const [{isHover}, bulTarget] = useDrop({
  accept: "bul",
  drop(item) {
      dispatch(setBulki(item));
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
      //middleDrop: monitor.didDrop()
  })
});



const [{sortHover}, sortedtopRef] = useDrop({
  accept: "middle",
  drop(item) {
      dispatch(setTopMiddle(item));
      
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
      sortHover ? styles.onHover : ''}`} key={shortid.generate()} ref={sortedtopRef}><div><DragIcon type="primary" /></div><ConstructorElement
    text={bulki&&bulki[0].name}
    price={bulki&&bulki[0].price}
    thumbnail={bulki&&bulki[0].image}
    isLocked = {true}
    type="top"
  /></li>

  
        <div className={styles.constructor__list_middle} ref={middleTarget}>
        {data.map((item) => <BurgerConstructorElement sort={middleHover} key={shortid.generate()} {...item} />)}
        </div>


        <li className={styles.constructor__list_bottom} key={shortid.generate()}><div><DragIcon type="primary" /></div><ConstructorElement
    type="bottom"
    isLocked = {true}
    text={bulki&&bulki[0].name}
    price={bulki&&bulki[0].price}
    thumbnail={bulki&&bulki[0].image}
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