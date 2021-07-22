import React, {useState, useRef} from 'react';
import styles from './account.module.css'
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { patchUserData } from '../../store/slices/patch-user';
import { Link } from 'react-router-dom';


const Account = () => {

const dispatch = useDispatch()

const {name, email} = useSelector(store => store.loginUser.userData)

const [mail, setMail] = useState(email)
const [pass, setPass] = useState('')
const [login, setLogin] = useState(name)
const emailRef = useRef(null)
const nameRef = useRef(null)
const inputClick = () => {
}

const newUserData = {
  'email': mail,
  'name': login,
}

const submitPatchHandler = (ev) => {
ev.preventDefault();
dispatch(patchUserData(newUserData))
}

const handleCancel = () => {
  setMail(email)
  setLogin(name)
}


return (

<section className={styles.account}>
  <Input
  type={'text'}
  placeholder={'Имя'}
  onChange = { e => setLogin(e.target.value)}
  value={login}
  icon={'EditIcon'}
  name={'name'}
  error={false}
  ref={nameRef}
  onIconClick={inputClick}
  errorText={'Ошибка'}/>

  <Input
  type={'email'}
  placeholder={'Логин'}
  onChange = { e => setMail(e.target.value)}
  value={mail}
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

<div className={styles.account__links}><Link to='#' onClick={handleCancel} className={styles.cancel__link}>Отменить</Link><div style={{ display: 'inline-block' }}><Button onClick={submitPatchHandler} type="primary" size="large">
  Сохранить
</Button></div>
</div>

</section>

  )

}

export default Account;