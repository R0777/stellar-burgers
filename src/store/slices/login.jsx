import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import { getCookie, setCookie, deleteCookie } from '../../utils/cookie'


export const userLogin = createAsyncThunk('loginUser/userLogin', async (user, { dispatch }) => {
  return fetch('https://norma.nomoreparties.space/api/auth/login',
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getCookie('token')
    },
    body: JSON.stringify({
      "email": user.email, 
      "password": user.pass, 
    })
    
  }).then(res => {
    if(!res.ok) throw Error(res.statusText)
    res.json()
    .then(res => {
      dispatch(setLoginRefreshToken(res.refreshToken))
      dispatch(setLoginAccessToken(res.accessToken))
      dispatch(setLoginUserData(res.user))
      })
      .then(res => dispatch(setLogin(true)))
    })
})

export const initialState = {
  "userData": {},
  "accessToken": '',
  "refreshToken": '',
  "login": false
}


const loginUserDetails = createSlice({
  name: 'loginUser',
  initialState,
  reducers: {

    setLoginUserData(state, action) {
      state.userData = action.payload
    },

    setLoginAccessToken(state, action) {
      let authToken = action.payload;
        if (authToken.indexOf('Bearer') === 0) {            
        authToken = authToken.split('Bearer ')[1];
        state.accessToken = authToken
        setCookie('token', authToken, { expires: 1200 })
        
        }   
    },
    setLoginRefreshToken(state, action) {
      state.refreshToken = action.payload
      setCookie('refreshToken', action.payload)
    },

    setLogin(state, action) {
      state.login = action.payload
    },

    logoutState(state) {
      state.userData = {}
      state.accessToken = ''
      state.refreshToken = ''
      state.login = false
      deleteCookie('token')
      deleteCookie('refreshToken')
    }

  },
  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [userLogin.fulfilled]: (state, {payload}) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [userLogin.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default loginUserDetails.reducer
export const { setLoginUserData, setLoginAccessToken, setLoginRefreshToken, setLogin, logoutState } = loginUserDetails.actions