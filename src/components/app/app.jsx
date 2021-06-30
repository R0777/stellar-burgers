import React, {useEffect, useCallback} from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import Footer from '../footer/footer';
import Modal from '../modal/modal'
import AcceptPopup from '../accept-popup/accept-popup';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/slices/get-data-api'
import { orderPopupToggle } from '../../store/slices/orderPopup';
import { ingredientPopupToggle } from '../../store/slices/ingredientPopup';


const App = () => {

  const togglePopup = useSelector(state => state.order.togglePopup)
  const ingredientPopup = useSelector(state => state.ingredients.ingredientPopup)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [dispatch]);


  const handleClick = useCallback((ev) => {
    if (ev.target !== ev.currentTarget) {
        return
    }
    dispatch(orderPopupToggle(false))
    dispatch(ingredientPopupToggle(false))
},[dispatch])


useEffect(() => {
  document.addEventListener("click", handleClick, false);

  return () => {
    document.removeEventListener("click", handleClick, false);
  };
}, [handleClick]);


  const handleClose = () => {
    dispatch(orderPopupToggle(false))
    dispatch(ingredientPopupToggle(false))
  }

  useEffect(() => {
    const handleEscape = (event) => event.key === 'Escape' && handleClose();
    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <AppHeader />
      <Main/>
      <Footer />

      { togglePopup && (<Modal handleClick={handleClick} onClose={handleClose} isOpen={togglePopup}>
      <AcceptPopup />
      </Modal>)
      }

      { ingredientPopup && (<Modal handleClick={handleClick} onClose={handleClose} title={'Детали ингридиента'} isOpen={ingredientPopup}>
      <IngredientPopup />
      </Modal>)
      }
    </>
  )
}

export default App;
