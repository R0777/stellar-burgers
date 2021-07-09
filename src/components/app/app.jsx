import React, {useEffect, useCallback} from 'react';
import AppHeader from '../app-header/app-header';
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Main from '../main/main';
import Footer from '../footer/footer';
import Modal from '../modal/modal'
import AcceptPopup from '../accept-popup/accept-popup';
import Window from '../window/window';
import Register from '../register/register';
import Login from '../login/login';
import ForgetPass from '../forget-pass/forget-pass';
import ResetPassword from '../reset-pass/reset-pass';
import NotFound404 from '../not-found404/not-found';
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

<Router>
  <Switch>
    <Route path="/login" exact={true}>
    <AppHeader />
      <Window
    title = {'Вход'}
    supText = {"Вы — новый пользователь? "}
    supTextLink = {"Зарегистрироваться"}
    subText = {"Забыли пароль? "}
    subTextLink = {"Восстановить пароль"}
    suplink = {"/register"}
    sublink = {"/forgot-password"}
    >
      
        <Login buttonTitle = {"Войти"} />
      </Window>
    </Route>

  

    <Route path="/register" exact={true}>
    <AppHeader />
      <Window   
    title = {"Регистрация"}

    supText = {"Уже зарегистрированы? "}
    supTextLink = {"Войти"}
    suplink= {"/login"}>
        <Register buttonTitle = {"Зарегистрироваться"} />
      </Window>
    </Route>



    <Route path="/forgot-password" exact={true}>
    <AppHeader />
      <Window   
    title = {"Восстановление пароля"}
    buttonTitle = {"Восстановить"}
    supText = {"Вспомнили пароль? "}
    supTextLink = {"Войти"}
    suplink={"/login"}>
        <ForgetPass />
      </Window>
    </Route>

    <Route path="/reset-password" exact={true}>
    <AppHeader />
      <Window   
    title ={"Восстановление пароля"}
    buttonTitle = {"Сохранить"}
    supText = {"Вспомнили пароль? "}
    supTextLink = {"Войти"}
    suplink = {"/login"}>
        <ResetPassword />
      </Window>
    </Route>

    <Route path="/" exact={true}>
    <AppHeader />
      <Main />
    </Route>

    <Route>
      <NotFound404 />
    </Route>
  </Switch>
</Router>
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
