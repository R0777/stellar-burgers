import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './login.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const Login = (props: any) => {

  const [value, setValue] = React.useState('value')
  const inputRef = useRef(null)
  const onIconClick = () => {
  //setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  return (
<>

<Input
      type={'email'}
      placeholder={'E-mail'}
      onChange={e => setValue(e.target.value)}
      icon={'CheckMarkIcon'}
      value={value}
      name={'email'}
      error={false}
      ref={inputRef}
      onIconClick={onIconClick}
      errorText={'Ошибка'}
      size={'default'}
    />
        <Input
      type={'password'}
      placeholder={'Пароль'}
      onChange={e => setValue(e.target.value)}
      icon={'CurrencyIcon'}
      value={value}
      name={'password'}
      error={false}
      ref={inputRef}
      onIconClick={onIconClick}
      errorText={'Ошибка'}
      size={'default'}
    />

</>
  )
}

// Login.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   title: PropTypes.string,
//   handleClick: PropTypes.func.isRequired,
//   isOpen: PropTypes.bool.isRequired,
//   children:PropTypes.element.isRequired
// }

export default Login;