import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstaructor from '../burger-constructor/burger-constructor';
import AcceptPopup from '../accept-popup/accept-popup';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import styles from './main.module.css';
//import { data } from '../../utils/data';

// interface Food {
// food: {
// }
// }
const Main = () => {

  const [acceptPopupOpen, setAcceptPopupOpen] = useState(false)
  const [ingredientPopupOpen, setIngredientPopupOpen] = useState(false)
  const [ingredients, setIngredients] = useState()
  const [data, setData] = useState([])


useEffect(() => {
  const getApiIngredients = async() => {
    try {
      const res = await fetch(`https://norma.nomoreparties.space/api/ingredients`);
      const ingredients = await res.json();
      setData(ingredients.data)
    } catch (error) {
      console.log(error)
    }
  }
  getApiIngredients()
}, []);


  const openAcceptPopup = () => {
    setAcceptPopupOpen(true)
  }

  const openIngredientPopup = (ingredients: any) => {
    setIngredients(ingredients)
    setIngredientPopupOpen(true)
  }

  const closeAllPopups = () => {
    setAcceptPopupOpen(false)
    setIngredientPopupOpen(false)
}

  return (
    <main className={styles.main}>

    <BurgerIngredients 
      data={data} 
      openIngredientPopup={openIngredientPopup} />

    <BurgerConstaructor 
      data = {data} 
      openAcceptPopup={openAcceptPopup} />

    <AcceptPopup 
      isOpen={acceptPopupOpen} 
      isClose={closeAllPopups} />

    <IngredientPopup 
      foodDetails = {ingredients}
      isOpen={ingredientPopupOpen} 
      isClose={closeAllPopups} />

  </main>
  );
}

Main.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number,
    openAcceptPopup: PropTypes.func
  })),
  
}

export default Main;