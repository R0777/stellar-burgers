import React from 'react';

import one from '../../images/one.png'
import two from '../../images/two.png'
import three from '../../images/three.png'
import four from '../../images/four.png'
import five from '../../images/five.png'
import six from '../../images/six.png'
import styles from '../../components/orders-list/orders-list.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const MoonFlowerList = () => {

return (

    <ul>
      <li>
        <div className={styles.order__item}>
          <div className={styles.order__iddate}>
            <p className={styles.order__id}>#034535</p>
            <p className={styles.order__date}>Сегодня, 16:20 i-GMT+3</p>
          </div>
          <h5 className={styles.order__title}>Death Star Starship Main бургер</h5>
          <p className={styles.order__status}>Создан</p>
          <div className={styles.order__details}>
            <ul className={styles.order__list}>
              <li><img src={five} alt='five' /></li>
              <li><img src={four} alt='four' /></li>
              <li><img src={three} alt='tree' /></li>
              <li><img src={two} alt='two' /></li>
              <li><img src={one} alt='One' /></li>          
            </ul>          
            <p className={styles.order__price}><span>480</span> <CurrencyIcon type="primary" /></p>
          </div>
        </div>
      </li>

      <li>
        <div className={styles.order__item}>
          <div className={styles.order__iddate}>
            <p className={styles.order__id}>#034534</p>
            <p className={styles.order__date}>Сегодня, 13:20 i-GMT+3</p>
          </div>
          <h5 className={styles.order__title}>Interstellar бургер</h5>
          <p className={styles.order__status}>Готовится</p>
          <div className={styles.order__details}>
            <ul className={styles.order__pic}>
            <li><img src={six} alt='six' /></li>
            <li><img src={five} alt='five' /></li>
              <li><img src={four} alt='four' /></li>
              <li><img src={three} alt='tree' /></li>
              <li><img src={two} alt='two' /></li>
              <li><img src={one} alt='One' /></li> 
            </ul>          
            <p className={styles.order__price}><span>560</span> <CurrencyIcon type="primary" /></p>
          </div>
        </div>
      </li>

      <li>
        <div className={styles.order__item}>
          <div className={styles.order__iddate}>
            <p className={styles.order__id}>#034533</p>
            <p className={styles.order__date}>Вчера, 13:50 i-GMT+3</p>
          </div>
          <h5 className={styles.order__title}>Black Hole Singularity острый бургер</h5>
          <p className={styles.order__status_done}>Выполнен</p>
          <div className={styles.order__details}>
            <ul>
            <li><img src={five} alt='five' /></li>
              <li><img src={four} alt='four' /></li>
              <li><img src={three} alt='tree' /></li>
              <li><img src={two} alt='two' /></li>
              <li><img src={one} alt='One' /></li> 
            </ul>          
            <p className={styles.order__price}><span>510</span><CurrencyIcon type="primary" /></p>
          </div>
        </div>
      </li>

      <li>
        <div className={styles.order__item}>
          <div className={styles.order__iddate}>
            <p className={styles.order__id}>#034532</p>
            <p className={styles.order__date}>2 дня назад, 21:53 i-GMT+3</p>
          </div>
          <h5 className={styles.order__title}>Supernova Infinity бургер</h5>
          <p className={styles.order__status_done}>Выполнен</p>
          <div className={styles.order__details}>
            <ul>
            <li><img src={five} alt='five' /></li>
              <li><img src={four} alt='four' /></li>
              <li><img src={three} alt='tree' /></li>
              <li><img src={two} alt='two' /></li>
              <li><img src={one} alt='One' /></li> 
            </ul>          
            <p className={styles.order__price}><span>550</span> <CurrencyIcon type="primary" /></p>
          </div>
        </div>
      </li>
    </ul>


)

}

export default MoonFlowerList;