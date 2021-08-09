import React, {useEffect, useCallback} from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import Window from '../window/window';
import Register from '../../pages/register/register';
import Login from '../../pages/login/login';
import ForgetPass from '../../pages/forget-pass/forget-pass';
import ResetPassword from '../../pages/reset-pass/reset-pass';
import AcceptPopup from '../accept-popup/accept-popup';
import Orders from '../../pages/orders/orders';
import NotFound404 from '../../pages/not-found404/not-found';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import ModalSwitch from '../modal-switch/modal-switch';
import ProtectedRoute from '../protected-route/protected-route';
import Main from '../main/main';
import Profile from '../../pages/profile/profile';
import Modal from "../modal/modal";
import Order from '../order/order'
import OrderSwitch from "../order-switch/order-switch";
import { useSelector, useDispatch } from "react-redux";
import { orderPopupToggle } from "../../store/slices/order-popup";
import { ingredientPopupToggle } from "../../store/slices/ingredient-popup";
import { ordersListPopupToggle } from "../../store/slices/order-list-popup"; 
import { profileOrderPopupToggle } from "../../store/slices/order-list-popup";
import { getData } from '../../store/slices/get-data-api'
import { getCookie } from '../../utils/cookie';
import { resetToken } from '../../store/slices/reset-token';
import { getUserData } from '../../store/slices/get-user';
import { setLogin } from '../../store/slices/login';


const Routes = () => {

  const togglePopup = useSelector(state => state.order.togglePopup)
  const ingredientPopup = useSelector(state => state.ingredients.ingredientPopup)
  const profileOrderPopup = useSelector(state => state.orderlistPop.profileOrderPopup)
  const ordersListPopup = useSelector(state => state.orderlistPop.ordersListPopup)
  const loggedIn = useSelector(store => store.loginUser.login)
  const dispatch = useDispatch()

  const jwt = getCookie('token');

  const tokenCheck = () => {

      if (!jwt) {
        const refresh = getCookie('refreshToken')
          if (!refresh) {
            return
          }
      dispatch(resetToken(getCookie('refreshToken')))
      }

    dispatch(getUserData(getCookie('token')))
    dispatch(setLogin(true))
  }

  useEffect(() => {
    dispatch(getData())
    tokenCheck()
  }, [dispatch, jwt]);

  const orderPopup = useSelector(state => state.orderlistPop.order)
  const orderPage = useSelector(state => state.orderInfo.order)


  const history = useHistory()

  const handleClick = useCallback((ev) => {
    if (ev.target !== ev.currentTarget) {
        return
    }
    window.location.href = '/'
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
    window.location.href = '/'
    dispatch(orderPopupToggle(false))
    dispatch(ingredientPopupToggle(false))
    dispatch(ordersListPopupToggle(false))
    dispatch(profileOrderPopupToggle(false))
  }

  const handleEsc = (event) => {
    if (event.key === 'Escape') {
      history.push('/')
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEsc, false);

    return () => { document.removeEventListener('keydown', handleEsc, false)
  }
  }, []);

  return (
    <>
  <Switch>

  <Route path="/" exact>
    <Main />
  </Route>

  <Route path="/login" exact={true}>
    <Window
        title = {'Вход'}
        supText = {"Вы — новый пользователь? "}
        supTextLink = {"Зарегистрироваться"}
        subText = {"Забыли пароль? "}
        subTextLink = {"Восстановить пароль"}
        suplink = {"/register"}
        sublink = {"/forgot-password"}>
      <Login buttonTitle = {"Войти"} loggedIn = {loggedIn} />
    </Window>
  </Route>


  <Route path="/register" exact={true}>

      <Window   
        title = {"Регистрация"}
        supText = {"Уже зарегистрированы? "}
        supTextLink = {"Войти"}
        suplink= {"/login"}>
        <Register buttonTitle = {"Зарегистрироваться"} loggedIn = {loggedIn} />
    </Window>
  </Route>


  <Route path="/forgot-password" exact={true}>

    <Window   
      title = {"Восстановление пароля"}
      supText = {"Вспомнили пароль? "}
      supTextLink = {"Войти"}
      suplink={"/login"}>
      <ForgetPass loggedIn = {loggedIn} buttonTitle = {"Восстановить"} />
    </Window>
  </Route>


  <Route path="/reset-password" exact={true}>

      <Window   
        title ={"Восстановление пароля"}
        supText = {"Вспомнили пароль? "}
        supTextLink = {"Войти"}
        suplink = {"/login"}>
        <ProtectedRoute 
        loggedIn={loggedIn}
        component={ResetPassword} />
    </Window>
  </Route>

  <Route path="/profile" exact={true}>

      <ProtectedRoute 
        loggedIn={loggedIn}
        component={Profile} />
  </Route>

  <Route path="/profile/order" exact={true}>

      <ProtectedRoute 
        loggedIn={loggedIn}
        component={Profile} />
  </Route>

  <Route path="/feed" exact={true}>

    <Orders />
  </Route>

{ingredientPopup &&
  <Route path="/ingredients/:id" exact>
    
      <Modal handleClick={handleClick} onClose={handleClose} title={'Детали ингридиента'} isOpen={ingredientPopup}>
        <IngredientPopup />
      </Modal>
      
  </Route>
}

  <Route path="/ingredients/:id">
      <ModalSwitch 
      children={
        <IngredientPopup />
      } />
  </Route>


  {ordersListPopup &&
  <Route path="/feed/:number" exact>
    
      <Modal handleClick={handleClick} onClose={handleClose} title={orderPopup.name} isOpen={ordersListPopup}>
        <Order order={orderPopup} />
      </Modal>
      
  </Route>
}

  <Route path="/feed/:number">
      <OrderSwitch
      children={
        <Order />
      } />
  </Route>


  {profileOrderPopup &&
  <Route path="/profile/orders/:number" exact>
    
      <Modal handleClick={handleClick} onClose={handleClose} title={orderPopup.name} isOpen={profileOrderPopup}>
        <Order order={orderPopup}/>
      </Modal>
      
  </Route>
}

  <Route path="/profile/orders/:number">
      <OrderSwitch
      children={
        <Order />
      } />
  </Route>




  <Route>
    <NotFound404 />
  </Route>
</Switch>

{ togglePopup && (<Modal handleClick={handleClick} onClose={handleClose} isOpen={togglePopup}>
      <AcceptPopup />
      </Modal>)
      }
  </>
  )
}

export default Routes