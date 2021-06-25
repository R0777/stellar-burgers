import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor-element.module.css';
import { useDispatch } from 'react-redux';
import { deleteMiddle } from '../../store/slices/constructor-element'

const BurgerConstructorElement = (props:any) => {

  const dispatch = useDispatch()

const handleBinClick = (ev:any) => {
  if (ev.target.closest('.constructor-element__action')) {
    dispatch(deleteMiddle(props.id))
  }
}


  useEffect(() => {
    document.addEventListener("click", handleBinClick, false);

    return () => {
      document.removeEventListener("click", handleBinClick, false);
    };
  }, [handleBinClick]);





  return (
    <li className={styles.constructor__list_item}><div><DragIcon type="primary" /></div><ConstructorElement
    type={props.count}
    text={props.name}
    price={props.price}
    thumbnail={props.image}
  /></li>
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