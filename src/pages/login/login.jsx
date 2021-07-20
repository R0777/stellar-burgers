import React, {useRef, useState} from 'react';
import { Redirect, useLocation } from 'react-router';
import PropTypes from 'prop-types';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch} from 'react-redux';
import { userLogin } from '../../store/slices/login';


const Login = (props) => {

    const dispatch = useDispatch()
    const location = useLocation();

    const getPath = () => {
    if (location.state !== undefined) {
    return location.state.from.pathname
    }
  }
    
    const [email, setEmail] = useState('')
    const [pass,  setPass] = useState('')
    const emailRef = useRef(null)
    const inputClick = () => {
        alert('Pass Click Callback')
    }

    const loginUser = {
        'email': email,
        'pass': pass,
    }

    const submitLoginHandler = (ev) => {
    ev.preventDefault();
    dispatch(userLogin(loginUser))

    }

    if (props.loggedIn) {
      return (
        <Redirect
          to={ location.state !== undefined ? getPath() : '/' }
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

Login.propTypes = {  
  buttonTitle: PropTypes.string.isRequired,   
  loggedIn: PropTypes.bool.isRequired
}

export default Login;