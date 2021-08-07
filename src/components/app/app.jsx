import React, {useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../footer/footer';
import Routes from '../routes/routes'
import AppHeader from '../app-header/app-header';
import { useDispatch } from 'react-redux';
import { getData } from '../../store/slices/get-data-api'
import { getCookie } from '../../utils/cookie';
import { resetToken } from '../../store/slices/reset-token';
import { getUserData } from '../../store/slices/get-user';
import { setLogin } from '../../store/slices/login';


const App = () => {

  const dispatch = useDispatch();

  const tokenCheck = () => {

    const jwt = getCookie('token');
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
  }, [dispatch]);

  return (
    <>

<Router>
  <AppHeader />
  <Routes />
</Router>
<Footer />

    </>
  )

}

export default App;
