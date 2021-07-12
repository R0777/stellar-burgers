import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import { setCookie } from '../../utils/cookie'
import { setLogin } from './login'

export const userRegister = createAsyncThunk('registerUser/userRegister', async (user, { dispatch }) => {
  return fetch('https://norma.nomoreparties.space/api/auth/register',
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": user.email, 
      "password": user.pass, 
      "name": user.name 
    })
    
  }).then(res => {
    if(!res.ok) throw Error(res.statusText)
    res.json()
      .then(res => {
      dispatch(setRegisterRefreshToken(res.refreshToken))
      dispatch(setRegisterAccessToken(res.accessToken))
      dispatch(setRegisterUserData(res.user))
      })
      .then(res => dispatch(setLogin(true)))

    })
})

const userDetails = createSlice({
  name: 'registerUser',
  initialState: {
    "userData": {},
    "accessToken": '',
    "refreshToken": ''
  },
  reducers: {
    setRegisterUserData(state, action) {
      state.userData = action.payload
    },
    setRegisterAccessToken(state, action) {
      let authToken = action.payload;
        if (authToken.indexOf('Bearer') === 0) {            
        authToken = authToken.split('Bearer ')[1];
        state.accessToken = authToken
        setCookie('token', authToken, { expires: 1200 })

        }   
    },
    setRegisterRefreshToken(state, action) {
      state.refreshToken = action.payload
      setCookie('refreshToken', action.payload)
    },

  },
  extraReducers: {
    [userRegister.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [userRegister.fulfilled]: (state, {payload}) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [userRegister.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default userDetails.reducer
export const { setRegisterUserData, setRegisterAccessToken, setRegisterRefreshToken } = userDetails.actions