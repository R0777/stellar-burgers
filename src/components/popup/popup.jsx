import React from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './popup.module.css'

const Popup = (props) => {

    return (
        <section className={props.isOpen ? styles.popup_active : styles.popup}>
            <div className={styles.popup__block}>
                <button className={styles.popup__close} type="button" onClick={props.isClose}><CloseIcon type="primary" /></button>
                
                {props.children&&props.children}
                
            </div>
        </section>
    );
}

export default Popup;