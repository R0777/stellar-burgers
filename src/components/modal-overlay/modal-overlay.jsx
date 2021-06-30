import React from 'react';
import styles from './modal-overlay.module.css'

const ModalOverlay = (props) => {

    return (
        <section className={props.isOpen ? styles.popup_active : styles.popup} onClick={props.isClose}>
            {props.children&&props.children}
        </section>
    );
}

export default ModalOverlay;