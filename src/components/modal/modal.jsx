import React from 'react';
import ReactDom from 'react-dom'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';


const Modal = (props) => {

  const ingredientPopup = useSelector(store => store.ingredients.ingredientPopup)

  const modalRoot = document.getElementById("modals");

    return ReactDom.createPortal(
      <ModalOverlay isOpen={props.isOpen} isClose={props.isClose}>
        <div className={styles.popup__block}>
                <button className={styles.popup__close} type="button" onClick={props.isClose}><CloseIcon type="primary" /></button>
                { ingredientPopup && <h5 className={styles.popup__title}>Детали ингридиента</h5>}
                {props.children&&props.children}
        </div> 
        </ModalOverlay>, modalRoot
    )
}

export default Modal;