import React from 'react';
import done from '../../images/done.png'
import Popup from '../popup/popup'
import styles from './accept-popup.module.css'
import { useSelector } from 'react-redux';
import { orderPopupToggle } from '../../store/slices/orderPopup';

const AcceptPopup = () => {

    const { orderId, togglePopup } = useSelector(state => state.order)

    return (
        <Popup
            isOpen={togglePopup}
            isClose={orderPopupToggle}>
            <p className={`text text_type_digits-large ${styles.popup__title}`}>{orderId}</p>
            <h5 className={styles.popup__id}>идентификатор заказа</h5>
            <img src={done} alt="accepted" />
            <p className={styles.popup__iscooking}>Ваш заказ начали готовить</p>
            <p className={styles.popup__orbitwait}>Дождитесь готовности на орбитальной станции</p>
        </Popup>
    );
}

export default AcceptPopup;