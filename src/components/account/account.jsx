import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './account.module.css'
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';


const Account = (props) => {


const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const [name, setName] = useState('')
const emailRef = useRef(null)
const nameRef = useRef(null)
const inputClick = () => {
    //setTimeout(() => inputRef.current.focus(), 0)
}


return (

<section className={styles.account}>
  <Input
  type={'text'}
  placeholder={'Имя'}
  onChange = { e => setName(e.target.value)}
  value={name}
  name={'name'}
  error={false}
  ref={nameRef}
  onIconClick={inputClick}
  errorText={'Ошибка'}/>

  <Input
  type={'email'}
  placeholder={'Логин'}
  onChange = { e => setEmail(e.target.value)}
  value={email}
  name={'email'}
  error={false}
  ref={emailRef}
  onIconClick={inputClick}
  errorText={'Ошибка'}/> 
  
  <PasswordInput 
  onChange = { e => setPass(e.target.value)}
  value = { pass }
  name = {'password'} /> 
</section>)

}

// Register.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   title: PropTypes.string,
//   handleClick: PropTypes.func.isRequired,
//   isOpen: PropTypes.bool.isRequired,
//   children:PropTypes.element.isRequired
// }

export default Account;