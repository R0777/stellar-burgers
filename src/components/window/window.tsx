import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './window.module.css'
import { getCookie } from '../../utils/cookie';

const Window = (props: any) => {

  useEffect(() => {
    console.log(getCookie('token'))
  },[])


  return (
<section className={styles.window}>
<h3 className={styles.window__title}>{props.title}</h3>
<form>
{props.children}

</form>
<p className={styles.window__suptext}>{props.supText}<Link to={props.suplink} className={styles.window__suptextlink}>{props.supTextLink}</Link></p>
{props.subText && <p className={styles.window__subtext}>{props.subText&&props.subText}<Link to={props.sublink&&props.sublink} className={styles.window__subtextlink}>{props.subTextLink&&props.subTextLink}</Link></p>}
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