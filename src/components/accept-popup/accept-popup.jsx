import React from 'react';
import done from '../../images/done.png'
import styles from './accept-popup.module.css'
import { useSelector } from 'react-redux';

const AcceptPopup = () => {

    const { orderId } = useSelector(state => state.order)

    return (
        <>
            <p className={`text text_type_digits-large ${styles.popup__title}`}>{orderId}</p>
            <h5 className={styles.popup__id}>идентификатор заказа</h5>
            <img src={done} alt="accepted" />
            <p className={styles.popup__iscooking}>Ваш заказ начали готовить</p>
            <p className={styles.popup__orbitwait}>Дождитесь готовности на орбитальной станции</p>
        </>
    );
}

export default AcceptPopup;