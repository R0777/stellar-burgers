import React, { useState } from 'react';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstaructor from '../burger-constructor/burger-constructor';
import AcceptPopup from '../accept-popup/accept-popup';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import styles from './main.module.css';
import { data } from '../../utils/data';

// interface Food {
// food: {
// }
// }
const Main = () => {

  const [acceptPopupOpen, setAcceptPopupOpen] = useState(false)
  const [ingredientPopupOpen, setIngredientPopupOpen] = useState(false)
  const [ingredients, setIngredients] = useState()

  const openAcceptPopup = () => {
    setAcceptPopupOpen(true)
  }

  const openIngredientPopup = async (ingredients) => {
    setIngredients(ingredients)
      const food = await ingredients
      console.log(food)  
    await setIngredientPopupOpen(true)
    
  }

  const closeAllPopups = () => {
    setAcceptPopupOpen(false)
    setIngredientPopupOpen(false)
}

  return (
    <main className={styles.main}>

    <BurgerIngredients 
      food={data} 
      openIngredientPopup={openIngredientPopup} />

    <BurgerConstaructor 
      food={data} 
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

export default Main;