import React, {useEffect, useCallback} from 'react';
import AppHeader from '../app-header/app-header';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import ProtectedRoute from '../protected-route/protected-route';
import Main from '../main/main';
import Profile from '../profile/profile';
import Footer from '../footer/footer';
import Modal from '../modal/modal'
import AcceptPopup from '../accept-popup/accept-popup';
import Window from '../window/window';
import Register from '../register/register';
import Login from '../login/login';
import ForgetPass from '../forget-pass/forget-pass';
import ResetPassword from '../reset-pass/reset-pass';
import Orders from '../orders/orders';
import NotFound404 from '../not-found404/not-found';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import ModalSwitch from '../modal-switch/modal-switch';
import Routes from '../routes/routes'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../store/slices/get-data-api'
import { orderPopupToggle } from '../../store/slices/orderPopup';
import { ingredientPopupToggle } from '../../store/slices/ingredientPopup';
import { getCookie } from '../../utils/cookie';
import { resetToken } from '../../store/slices/resetToken';
import { getUserData } from '../../store/slices/get-user';
import { setLogin } from '../../store/slices/login';


const App = () => {

  const togglePopup = useSelector(state => state.order.togglePopup)
  const ingredientPopup = useSelector(state => state.ingredients.ingredientPopup)
  const loggedIn = useSelector(store => store.loginUser.login)

  const dispatch = useDispatch();
  let location = useLocation();
  const history = useHistory();

  let background = ingredientPopup===true && location && location.state.background

  const tokenCheck = () => {

    const jwt = getCookie('token');
    if (!jwt) {
      const refresh = getCookie('refreshToken')
        if (!refresh) {
          console.log('ничего совсем нету')
          return
        }
        console.log('есть refresh token')
        dispatch(resetToken(getCookie('refreshToken')))
    }

    dispatch(getUserData(getCookie('token')))
    dispatch(setLogin(true))
  }

  useEffect(() => {
    dispatch(getData())
    tokenCheck()
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

<Router>
  <Routes handleClick={handleClick} handleClose={handleClose} />
</Router>
<Footer />

      { togglePopup && (<Modal handleClick={handleClick} onClose={handleClose} isOpen={togglePopup}>
      <AcceptPopup />
      </Modal>)
      }
      
    </>
  )

}

export default App;
