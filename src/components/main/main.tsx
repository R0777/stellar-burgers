import React from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstaructor from '../burger-constructor/burger-constructor';
import styles from './main.module.css';


const Main = () => {

  return (
    <DndProvider backend={HTML5Backend}>

      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstaructor />
      </main>

    </DndProvider>
  );
}

export default Main;