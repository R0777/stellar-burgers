import React, {useEffect, useCallback} from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal-overlay.module.css'
import { useDispatch } from 'react-redux';


const ModalOverlay = (props) => {

  const dispatch = useDispatch()


  const handleClose = () => {
  dispatch(props.isClose(false))
}

  const handleClick = useCallback((ev) => {
    if (ev.target !== ev.currentTarget) {
        return
    }
    dispatch(props.isClose(false))
},[props, dispatch])

  const handleEscape = useCallback((event) => {
  if(event.keyCode === 27) {
    dispatch(props.isClose(false)) 
  }
  }, [props, dispatch]);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false);
    document.addEventListener("click", handleClick, false);

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
      document.removeEventListener("click", handleClick, false);
    };
  }, [handleClick, handleEscape]);

    return (
        <section className={props.isOpen ? styles.popup_active : styles.popup} onClick={handleClick}>
            <div className={styles.popup__block}>
                <button className={styles.popup__close} type="button" onClick={handleClose}><CloseIcon type="primary" /></button>
                
                {props.children&&props.children}
                
            </div>
        </section>
    );
}

export default ModalOverlay;