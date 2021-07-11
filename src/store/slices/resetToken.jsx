import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLoginAccessToken, setLoginRefreshToken } from './login';
import { getUserData } from './get-user';

export const resetToken = createAsyncThunk('tokenReset/resetToken', async (refreshToken, { dispatch }) => {
  return fetch('https://norma.nomoreparties.space/api/auth/token',
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'token': refreshToken
    })
    
  }).then(res => {
    if(!res.ok) throw Error(res.statusText)
      res.json()
      .then(res => {
        dispatch(getUserData(res.accessToken))
        dispatch(setLoginAccessToken(res.accessToken))
        dispatch(setLoginRefreshToken(res.refreshToken))
      
      })
  })
})

const refreshToken = createSlice({
  name: 'tokenReset',
  initialState: {},


  extraReducers: {
    [resetToken.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [resetToken.fulfilled]: (state, {payload}) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [resetToken.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default refreshToken.reducer
//export const { setForgotPageVisit } = refreshToken.actions