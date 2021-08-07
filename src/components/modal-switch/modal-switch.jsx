import React, {useEffect} from 'react';
import styles from './modal-switch.module.css'
import { useSelector, useDispatch} from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import Order from '../order/order';

const ModalSwitch = () => {

  const location = useLocation()

  const {id} = useParams();

      const data = useSelector(state => state.api.data)
      const order = useSelector(state => state.orderInfo.order)

      const ingredient = data.find(item => item._id === id)

    return (
      <div className={styles.switch}> 
        { location.pathname === `/ingredients/${id}` ? <IngredientPopup ingredient={ingredient} /> : <Order order={order} /> }
      </div>
    );
}

export default ModalSwitch;