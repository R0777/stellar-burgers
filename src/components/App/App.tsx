import React from 'react';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstaructor from '../burger-constructor/burger-constructor';
import Footer from '../footer/footer';
import styles from './app.module.css';

const App = () => {
  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients />
        <BurgerConstaructor />
      </main>
      <Footer />
    </>
  );
}

export default App;
