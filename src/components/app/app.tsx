import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import Footer from '../footer/footer';
import Modal from '../modal/modal'
import AcceptPopup from '../accept-popup/accept-popup';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import { useDispatch } from 'react-redux';
import { getData } from '../../store/slices/get-data-api'


const App = () => {

  const [acceptPopupOpen, setAcceptPopupOpen] = useState(false)
  const [ingredientPopupOpen, setIngredientPopupOpen] = useState(false)

  const [ingredients, setIngredients] = useState()
  const [data, setData] = useState([])

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData())
  }, [dispatch]);


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
    <>
      <AppHeader />
      <Main 
      openIngredientPopup={openIngredientPopup}
      openAcceptPopup={openAcceptPopup}
      data={data}
      />
      <Footer />

      <Modal>
      <AcceptPopup 
      isOpen={acceptPopupOpen} 
      isClose={closeAllPopups} />
    </Modal>

    <Modal>
      <IngredientPopup 
      foodDetails = {ingredients}
      isOpen={ingredientPopupOpen} 
      isClose={closeAllPopups} />
    </Modal>
    </>
  )
}

App.propTypes = {
  openAcceptPopup: PropTypes.func,
  openIngredientPopup: PropTypes.func,
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
    
  })),
  
}

export default App;
