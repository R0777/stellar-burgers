import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import { setCookie } from '../../utils/cookie'

export const userRegister = createAsyncThunk('user/userRegister', async (user, { dispatch }) => {
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
      dispatch(setRefreshToken(res.refreshToken))
      dispatch(setAccessToken(res.accessToken))
      dispatch(setUserData(res.user))
      })

    })
})

const userDetails = createSlice({
  name: 'user',
  initialState: {
    "userData": {},
    "accessToken": '',
    "refreshToken": ''
  },
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload
    },
    setAccessToken(state, action) {
      let authToken = action.payload;
        if (authToken.indexOf('Bearer') === 0) {            
        authToken = authToken.split('Bearer ')[1];
        state.accessToken = authToken
        setCookie('token', authToken)
        }   
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload
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
export const { setUserData, setAccessToken, setRefreshToken } = userDetails.actions