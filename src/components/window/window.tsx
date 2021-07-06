import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './window.module.css'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const Window = (props: any) => {

  const [value, setValue] = React.useState('value')
  const inputRef = useRef(null)
  const onIconClick = () => {
  //setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }

  return (
<section className={styles.window}>
<h3 className={styles.window__title}>{props.title}</h3>
<form>
{props.children}

<div className={styles.window__btn}><Button type="primary" size="large">
  {props.buttonTitle}
</Button>
</div>
</form>
<p className={styles.window__suptext}>{props.supText}<Link to="/register" className={styles.window__suptextlink}>{props.supTextLink}</Link></p>
{props.subText && <p className={styles.window__subtext}>{props.subText}<Link to="/forgot-password">{props.subTextLink}</Link></p>}
</section>
  )
}

// Window.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   title: PropTypes.string,
//   handleClick: PropTypes.func.isRequired,
//   isOpen: PropTypes.bool.isRequired,
//   children:PropTypes.element.isRequired
// }

export default Window;