import React, {useRef, useState} from 'react';
import { useHistory, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import {Input, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { forgotPass, setForgotPageVisit } from '../../store/slices/forgot-password';

const ForgetPass = (props) => {

    const dispatch = useDispatch();
    const history = useHistory()
    
    const [email, setEmail] = useState('')
    const emailRef = useRef(null)
  
    const inputClick = () => {
        alert('Pass Click Callback')
    }

    const forgotPasswordHandler = (ev) => {
        ev.preventDefault();
        dispatch(forgotPass(email))
        .then(res => {
          if (res.payload.success === true) {
            dispatch(setForgotPageVisit(true))
            history.push('/reset-password')
          }
        })
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

    return (<> <Input
        type={'email'}
        placeholder={'Укажите e-mail'}
        onChange={e => setEmail(e.target.value)}
        value={email}
        name={'email'}
        error={false}
        ref={emailRef}
        onIconClick={inputClick}
        errorText={'Ошибка'}/> 

<div style={{ margin: 'auto' }}><Button onClick={forgotPasswordHandler} type="primary" size="large">
  {props.buttonTitle}
</Button>
</div>

    </>)
}

ForgetPass.propTypes = { 
  loggedIn: PropTypes.bool.isRequired
}

export default ForgetPass;