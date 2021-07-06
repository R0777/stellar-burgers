import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css'

const ModalOverlay = (props) => {

    return (
        <section className={props.isOpen ? styles.popup_active : styles.popup} onClick={props.handleClick}>
          {props.children}
        </section>
    );
}

ModalOverlay.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children:PropTypes.element.isRequired
}

export default ModalOverlay;