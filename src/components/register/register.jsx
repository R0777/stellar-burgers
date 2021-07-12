import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { userRegister } from '../../store/slices/register';

const Register = (props) => {

const dispatch = useDispatch()

const [email, setEmail] = useState('')
const [pass, setPass] = useState('')
const [name, setName] = useState('')
const emailRef = useRef(null)
const nameRef = useRef(null)
const inputClick = () => {
    //setTimeout(() => inputRef.current.focus(), 0)
}

const registerUser = {
  'email': email,
  'pass': pass,
  'name': name
}

const submitRegisterHandler = (ev) => {
  ev.preventDefault();
  dispatch(userRegister(registerUser))
}

if (props.loggedIn) {
  return (
    <Redirect
      to={{
        pathname: '/'
      }}
    />
  );
}

return (<>

  <Input
  type={'text'}
  placeholder={'Имя'}
  onChange={e => setName(e.target.value)}
  value={name}
  name={'name'}
  error={false}
  ref={nameRef}
  onIconClick={inputClick}
  errorText={'Ошибка'}/>


  <Input
  type={'email'}
  placeholder={'E-mail'}
  onChange={e => setEmail(e.target.value)}
  value={email}
  name={'email'}
  error={false}
  ref={emailRef}
  onIconClick={inputClick}
  errorText={'Ошибка'}/> 
  
  <PasswordInput onChange = {
  e => setPass(e.target.value)}
  value = { pass }
  name = {'password'} /> 

<div style={{ margin: 'auto' }}><Button onClick={submitRegisterHandler} type="primary" size="large">
  {props.buttonTitle}
</Button>
</div>
</>)

}

// Register.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   title: PropTypes.string,
//   handleClick: PropTypes.func.isRequired,
//   isOpen: PropTypes.bool.isRequired,
//   children:PropTypes.element.isRequired
// }

export default Register;