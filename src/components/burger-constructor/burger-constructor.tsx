import React from 'react';
import { Button, ConstructorElement, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { data } from '../../utils/data'
import styles from './burger-constructor.module.css';

const BurgerConstaructor = () => {
  return (
      <section className={styles.constructor__section}>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className={styles.constructor__list}>
      <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
        type="top"
        isLocked={true}
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      /></li>
      <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
        
        
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      /></li>
      <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
        
        
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      /></li>
            <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
        
        
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      /></li>
            <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
        
        
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      /></li>
            <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
        
        
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      /></li>
      <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      /></li>
            <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      /></li>
            <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      /></li>
      <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
        type="bottom"
        isLocked={true}
        text={data[0].name}
        price={data[0].price}
        thumbnail={data[0].image}
      /></li>
        </ul>
<div className={styles.constructror__currency_box}>
  <p className={styles.constructor__currency}>6275</p><div className={styles.constructror__currency_icon}><CurrencyIcon type="primary" /></div>
  <div className={styles.constructror__currency_btn}><Button type="primary" size="large">Оформить заказ</Button></div>
</div>

      </section>
  );
}

export default BurgerConstaructor;