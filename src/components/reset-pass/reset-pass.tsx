import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components';


const ResetPassword = (props : any) => {
    
  const [value,
    setValue] = useState('')
const [pass,
    setPass] = useState('')
const codeRef = useRef(null)
const inputClick = () => {
    //setTimeout(() => inputRef.current.focus(), 0)
    alert('Pass Click Callback')
}
const onChange = (e:any) => {
  setPass(e.target.value)
}

return (<>
  <PasswordInput 
    onChange = {onChange}
    value = { pass }
    name = {'password'} /> 

  <Input
    type={'text'}
    placeholder={'Введите код из письма'}
    onChange={e => setValue(e.target.value)}
    value={value}
    name={'code'}
    error={false}
    ref={codeRef}
    onIconClick={inputClick}
    errorText={'Ошибка'}/> 
    
    
</>)

}

// ResetPassword.propTypes = {   onClose: PropTypes.func.isRequired,   title:
// PropTypes.string,   handleClick: PropTypes.func.isRequired,   isOpen:
// PropTypes.bool.isRequired,   children:PropTypes.element.isRequired }

export default ResetPassword;