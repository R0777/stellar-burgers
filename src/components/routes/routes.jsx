import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import Window from '../window/window';
import Register from '../register/register';
import Login from '../login/login';
import ForgetPass from '../forget-pass/forget-pass';
import ResetPassword from '../reset-pass/reset-pass';
import Orders from '../orders/orders';
import NotFound404 from '../not-found404/not-found';
import IngredientPopup from '../ingredient-popup/ingredient-popup';
import ModalSwitch from '../modal-switch/modal-switch';
import ProtectedRoute from '../protected-route/protected-route';
import Main from '../main/main';
import Profile from '../profile/profile';
import AppHeader from '../app-header/app-header';
import Modal from "../modal/modal";
import { useSelector } from "react-redux";


const Routes = (props) => {

  const togglePopup = useSelector(state => state.order.togglePopup)
  const ingredientPopup = useSelector(state => state.ingredients.ingredientPopup)
  const loggedIn = useSelector(store => store.loginUser.login)

  const location = useLocation();
  const history = useHistory();

  let background = ingredientPopup===true && location && location.state.background

return (

  <Router>
  <Switch location={background || location}>
  <Route path="/login" exact={true}>
    <AppHeader />
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
    <AppHeader />
      <Window   
        title = {"Регистрация"}
        supText = {"Уже зарегистрированы? "}
        supTextLink = {"Войти"}
        suplink= {"/login"}>
        <Register buttonTitle = {"Зарегистрироваться"} loggedIn = {loggedIn} />
    </Window>
  </Route>


  <Route path="/forgot-password" exact={true}>
  <AppHeader />
    <Window   
      title = {"Восстановление пароля"}
      supText = {"Вспомнили пароль? "}
      supTextLink = {"Войти"}
      suplink={"/login"}>
      <ForgetPass loggedIn = {loggedIn} buttonTitle = {"Восстановить"} />
    </Window>
  </Route>


  <Route path="/reset-password" exact={true}>
    <AppHeader />
      <Window   
        title ={"Восстановление пароля"}
        supText = {"Вспомнили пароль? "}
        supTextLink = {"Войти"}
        suplink = {"/login"}>
        <ResetPassword loggedIn = {loggedIn} buttonTitle = {"Сохранить"} />
    </Window>
  </Route>


  <Route path="/" exact={true}>
    <AppHeader />
      <Main />
  </Route>

  <Route path="/profile" exact={true}>
    <AppHeader />
      <ProtectedRoute 
        loggedIn={loggedIn}
        component={Profile} />
  </Route>

  <Route path="/profile/order" exact={true}>
    <AppHeader />
      <ProtectedRoute 
        loggedIn={loggedIn}
        component={Profile} />
  </Route>

  <Route path="/feed" exact={true}>
    <AppHeader />
    <Orders />
  </Route>

  <Route path="/ingredients/:id" exact>
  { ingredientPopup === true && (
      <Modal handleClick={props.handleClick} onClose={props.handleClose} title={'Детали ингридиента'} isOpen={ingredientPopup}>
        <IngredientPopup />
      </Modal>
      )
      
  }
  </Route>

  
<Route path="/ingredients/:id" exact>
  { ingredientPopup === false && (
      <ModalSwitch />
      )
  }
  </Route>


  <Route>
    <NotFound404 />
  </Route>
</Switch>
</Router>
)
}

export default Routes