import React, {useEffect} from 'react';
import styles from '../modal-switch/modal-switch.module.css'
import { useSelector, useDispatch} from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import Order from '../order/order';
import { getOrderDetails } from '../../store/slices/get-order-details';

const OrderSwitch = () => {

  const dispatch = useDispatch()
  const {id} = useParams();

  useEffect(() => {
    dispatch(getOrderDetails(id))
  },[])

  const location = useLocation()

  const data = useSelector(state => state.api.data)


  const ingredient = data.find(item => item._id === id)

    return (
      <div className={styles.switch}> 
        { location.pathname === `/ingredients/${id}` ? <IngredientPopup ingredient={ingredient} /> : <Order /> }
      </div>
    );
}

export default OrderSwitch;