import React from 'react';
import done from '../../images/done.png'
import Popup from '../popup/popup'
import styles from './accept-popup.module.css'

const AcceptPopup = (props) => {
    return (
        <Popup
            isOpen={props.isOpen}
            isClose={props.isClose}>
            <p className={`text text_type_digits-large ${styles.popup__title}`}>123456</p>
            <h5 className={styles.popup__id}>идентификатор заказа</h5>
            <img src={done} />
            <p className={styles.popup__iscooking}>Ваш заказ начали готовить</p>
            <p className={styles.popup__orbitwait}>Дождитесь готовности на орбитальной станции</p>
        </Popup>
    );
}

export default AcceptPopup;