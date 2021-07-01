import React from 'react';
import PropTypes from 'prop-types';
import burgMid from '../../images/burgMid.png'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor-element.module.css';
import { useDispatch } from 'react-redux';
import { deleteMiddle, sortConstructor } from '../../store/slices/constructor-element'
import { useDrag, useDrop } from 'react-dnd';

const BurgerConstructorElement = (props:any) => {

  const dispatch = useDispatch()

  const [, midRef] = useDrag({
    type: "middle",
    item: props,
    collect: monitor => ({
      isDrag: monitor.isDragging(),
  })
});

const [{midHover, midDrop}, midDropRef] = useDrop({
  accept: "middle",
  drop(item:any) {

    dispatch(sortConstructor({props, item}))
  },
  collect: monitor => ({
      midHover: monitor.isOver(),
      midDrop: monitor.didDrop()

  }),
});

  return (

    <div ref={midRef} className={`${
      midHover ? styles.onHover : ''}`}>
    <li className={`${styles.constructor__list_item} ${midDrop ? 'dropTarget' : ''}`} ref={midDropRef}><div><DragIcon type="primary" /></div><ConstructorElement
    type={props.count}
    text={props.name}
    handleClose = {()=>{dispatch(deleteMiddle(props.ver))}}
    price={props.price}
    thumbnail={props.image ? props.image : burgMid}
  /></li>
  </div>
  )
}

BurgerConstructorElement.propTypes = {
  name: PropTypes.string.isRequired,
  fat: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string
}

//Может такой вариант типизации более верный?
// BurgerConstructorElement.propTypes = {
//   id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     ver: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     image: PropTypes.string
// }

export default BurgerConstructorElement;