import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom'
import styles from './modal.module.css'
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = (props) => {

  const modalRoot = document.getElementById("modals");

    return ReactDom.createPortal(
      <ModalOverlay handleClick={props.handleClick} isOpen={props.isOpen}>
        <div className={styles.popup__block}>
                <button className={styles.popup__close} type="button" onClick={props.onClose}><CloseIcon type="primary" /></button>
                { props.title && (<h5 className={styles.popup__title}>{props.title&&props.title}</h5>)}
                {props.children}
        </div> 
        </ModalOverlay>, modalRoot
    )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children:PropTypes.element.isRequired
}

export default Modal;