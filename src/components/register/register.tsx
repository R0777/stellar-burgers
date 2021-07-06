import React from 'react';
import PropTypes from 'prop-types';
import styles from './register.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Register = () => {


}

Register.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children:PropTypes.element.isRequired
}

export default Register;