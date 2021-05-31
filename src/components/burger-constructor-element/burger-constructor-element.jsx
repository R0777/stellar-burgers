import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor-element.module.css';

// interface Props {
//   key: string,
//   image: string,
//   price: number,
//   name: string,
//   count: string
// }

const BurgerConstaructorElement = (props) => {
  return (
    <li className={styles.constructor__list_item} key={props.key}><div><DragIcon type="primary" /></div><ConstructorElement
    type={props.count}
    isLocked={true}
    text={props.name}
    price={props.price}
    thumbnail={props.image}
  /></li>
  );
}

export default BurgerConstaructorElement;