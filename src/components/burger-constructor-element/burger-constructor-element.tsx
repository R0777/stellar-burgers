import React, {useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor-element.module.css';
import { useDispatch } from 'react-redux';
import { deleteMiddle, sortConstructor } from '../../store/slices/constructor-element'
import { useDrag, useDrop } from 'react-dnd';

const BurgerConstructorElement = (props:any) => {

  const dispatch = useDispatch()

  const [{isDrag}, midRef] = useDrag({
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
    handleClose = {()=>{dispatch(deleteMiddle(props.id))}}
    price={props.price}
    thumbnail={props.image}
  /></li>
  </div>
  );
}

BurgerConstructorElement.propTypes = {
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

export default BurgerConstructorElement;