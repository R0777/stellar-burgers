import React, {useEffect} from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import Footer from '../footer/footer';
import Modal from '../modal/modal'
import AcceptPopup from '../accept-popup/accept-popup';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import { useDispatch } from 'react-redux';
import { getData } from '../../store/slices/get-data-api'


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [dispatch]);


  return (
    <>
      <AppHeader />
      <Main/>
      <Footer />

      <Modal>
      <AcceptPopup />
      </Modal>

      <Modal>
      <IngredientPopup />
      </Modal>
    </>
  )
}

export default App;
