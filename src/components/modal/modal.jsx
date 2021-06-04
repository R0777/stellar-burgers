import React from 'react';
import ReactDom from 'react-dom'
import App from '../app/app'

const Modal = (props) => {

    return ReactDom.createPortal(
      <>
      {props.children}
      </>, document.body
    )
}

export default Modal;