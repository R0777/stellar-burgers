import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './window.module.css'

const Window = (props: any) => {

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

Window.propTypes = {
  onClose: PropTypes.string,
  title: PropTypes.string,
  supTextLink: PropTypes.string,
  suplink: PropTypes.string,
  supText:PropTypes.string,
  subText: PropTypes.string,
  sublink: PropTypes.string,
  subTextLink: PropTypes.string

}

export default Window;