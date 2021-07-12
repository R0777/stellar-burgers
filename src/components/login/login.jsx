import React, {useRef, useState} from 'react';
import { Redirect, useLocation } from 'react-router';
import PropTypes from 'prop-types';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store/slices/login';


const Login = (props) => {

    const dispatch = useDispatch()
    const location = useLocation();
    const root = location.state.from.pathname

    
    const [email, setEmail] = useState('')
    const [pass,  setPass] = useState('')
    const emailRef = useRef(null)
    const inputClick = () => {
        //setTimeout(() => inputRef.current.focus(), 0)
        alert('Pass Click Callback')
    }

    const loginUser = {
        'email': email,
        'pass': pass,
    }

    const submitLoginHandler = (ev) => {
    ev.preventDefault();
    dispatch(userLogin(loginUser))
    // console.log(location.pathname)
    // history.push(location.pathname)
    }

    if (props.loggedIn) {
      return (
        <Redirect
          to={ root ? root : '/' }
        />
      );
    }

    return (<> <Input
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

<div style={{ margin: 'auto' }}><Button onClick={submitLoginHandler} type="primary" size="large">
  {props.buttonTitle}
</Button>
</div>
    </>)

}

// Login.propTypes = {   onClose: PropTypes.func.isRequired,   title:
// PropTypes.string,   handleClick: PropTypes.func.isRequired,   isOpen:
// PropTypes.bool.isRequired,   children:PropTypes.element.isRequired }

export default Login;