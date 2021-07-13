import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import styles from './account.module.css'
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';


const Account = (props) => {

const login = useSelector(store => store.loginUser.userData.name)
const mail = useSelector(store => store.loginUser.userData.email)

const [email, setEmail] = useState(mail)
const [pass, setPass] = useState('')
const [name, setName] = useState(login)
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
  icon={'EditIcon'}
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
  icon={'EditIcon'}
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