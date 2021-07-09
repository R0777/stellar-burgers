import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Input} from '@ya.praktikum/react-developer-burger-ui-components';


const ForgetPass = (props : any) => {
    
    const [value,
        setValue] = useState('')
    const emailRef = useRef(null)
  
    const inputClick = () => {
        //setTimeout(() => inputRef.current.focus(), 0)
        alert('Pass Click Callback')
    }

    return (<> <Input
        type={'email'}
        placeholder={'Укажите e-mail'}
        onChange={e => setValue(e.target.value)}
        value={value}
        name={'email'}
        error={false}
        ref={emailRef}
        onIconClick={inputClick}
        errorText={'Ошибка'}/> 

    </>)

}

// ForgetPass.propTypes = {   onClose: PropTypes.func.isRequired,   title:
// PropTypes.string,   handleClick: PropTypes.func.isRequired,   isOpen:
// PropTypes.bool.isRequired,   children:PropTypes.element.isRequired }

export default ForgetPass;