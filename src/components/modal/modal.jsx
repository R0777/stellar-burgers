import React from 'react';
import ReactDom from 'react-dom'

const Modal = (props) => {

    return ReactDom.createPortal(
      <>
        {props.children}  
      </>, document.body
    )
}

export default Modal;