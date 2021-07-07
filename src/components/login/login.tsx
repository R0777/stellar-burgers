import React, {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './login.module.css'
import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';


const Login = (props : any) => {
    
    const [value,
        setValue] = useState('')
    const [pass,
        setPass] = useState('')
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const inputClick = () => {
        //setTimeout(() => inputRef.current.focus(), 0)
        alert('Pass Click Callback')
    }

    return (<> <Input
        type={'email'}
        placeholder={'E-mail'}
        onChange={e => setValue(e.target.value)}
        value={value}
        name={'email'}
        error={false}
        ref={emailRef}
        onIconClick={inputClick}
        errorText={'Ошибка'}/> < PasswordInput onChange = {
        e => setPass(e.target.value)
    }
    value = {
        pass
    }
    name = {
        'password'
    } /> 
  
    
    </>)

}

// Login.propTypes = {   onClose: PropTypes.func.isRequired,   title:
// PropTypes.string,   handleClick: PropTypes.func.isRequired,   isOpen:
// PropTypes.bool.isRequired,   children:PropTypes.element.isRequired }

export default Login;