import React from 'react';
import PropTypes from 'prop-types';
import styles from './modal-switch.module.css'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ModalSwitch = (props) => {

  const {id} = useParams();  
  
  let data = useSelector(state => state.api.data)

  const ingredient = data.find(item => item._id === id)

  console.log(ingredient)

    return (
      <div className={styles.switch}> 
      <>
      <img src={ingredient && ingredient.image_large} className={styles.ingredient__img} alt="Фкусняшка"/>
      <p className={styles.ingredient__name}>{ingredient && ingredient.name}</p>
      <div className={styles.ingredient__details}>
      <p className={styles.ingredient__cal}>Калории
      <span className="text text_type_digits-default">{ingredient && ingredient.calories}</span></p>
      <p className={styles.ingredient__cal}>Белки,г
      <span className="text text_type_digits-default">{ingredient && ingredient.proteins}</span></p>
      <p className={styles.ingredient__cal}>Жиры,г
      <span className="text text_type_digits-default">{ingredient && ingredient.fat}</span></p>
      <p className={styles.ingredient__cal}>Углеводы,г
      <span className="text text_type_digits-default">{ingredient && ingredient.carbohydrates}</span></p>
      </div>      
      </>
      </div>
    );
}

ModalSwitch.propTypes = {
  // handleClick: PropTypes.func.isRequired,
  // isOpen: PropTypes.bool.isRequired,
  children:PropTypes.element.isRequired
}

export default ModalSwitch;