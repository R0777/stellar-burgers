import React, {useEffect, useCallback} from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './popup.module.css'


const Popup = (props) => {

const handleClick = (ev) => {
    if (ev.target !== ev.currentTarget) {
        return
    }
    props.isClose()
}


const handleEscape = useCallback((event) => {
  if(event.keyCode === 27) {
      props.isClose()
  }
}, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false);
    document.addEventListener("keydown", handleClick, false);

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
      document.removeEventListener("keydown", handleClick, false);
    };
  }, []);

    return (
        <section className={props.isOpen ? styles.popup_active : styles.popup} onClick={handleClick}>
            <div className={styles.popup__block}>
                <button className={styles.popup__close} type="button" onClick={props.isClose}><CloseIcon type="primary" /></button>
                
                {props.children&&props.children}
                
            </div>
        </section>
    );
}

export default Popup;