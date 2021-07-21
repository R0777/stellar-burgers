import React, {useRef, useState} from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {Input, PasswordInput, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { resetPass } from '../../store/slices/reset-password'

const ResetPassword = (props) => {

  const history = useHistory()
  const dispatch = useDispatch()
    
  const [resetCode, setResetCode] = useState('')
  const [pass, setPass] = useState('')
  const codeRef = useRef(null)
  const inputClick = () => {
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
    .then(res => {
      if (res.payload.success === true) {
        history.push('/login')
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
  Сохранить
</Button>
</div>

</>)

}

ResetPassword.propTypes = {   
  loggedIn: PropTypes.bool.isRequired
}

export default ResetPassword;