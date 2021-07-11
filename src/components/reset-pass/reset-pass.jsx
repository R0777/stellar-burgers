import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { resetPass } from '../../store/slices/reset-password'


const ResetPassword = (props) => {

  const dispatch = useDispatch()
    
  const [resetCode, setResetCode] = useState('')
  const [pass, setPass] = useState('')
  const codeRef = useRef(null)
  const inputClick = () => {
    //setTimeout(() => inputRef.current.focus(), 0)
    alert('Pass Click Callback')
  }
  const onChange = (e) => {
  setPass(e.target.value)
  }

  const userData = {
    'password': pass, 
    'token': resetCode
  }

  const resetPasswordHandler = (ev) => {
    ev.preventDefault();
    dispatch(resetPass(userData))
  }


return (<>
  <PasswordInput 
    onChange = {onChange}
    value = { pass }
    name = {'password'} /> 

  <Input
    type={'text'}
    placeholder={'Введите код из письма'}
    onChange={e => setResetCode(e.target.value)}
    value={resetCode}
    name={'resetCode'}
    error={false}
    ref={codeRef}
    onIconClick={inputClick}
    errorText={'Ошибка'}/> 

<div style={{ margin: 'auto' }}><Button onClick={resetPasswordHandler} type="primary" size="large">
  {props.buttonTitle}
</Button>
</div>

</>)

}

// ResetPassword.propTypes = {   onClose: PropTypes.func.isRequired,   title:
// PropTypes.string,   handleClick: PropTypes.func.isRequired,   isOpen:
// PropTypes.bool.isRequired,   children:PropTypes.element.isRequired }

export default ResetPassword;