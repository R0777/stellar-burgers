import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logoutState } from './login';

export const logout = createAsyncThunk('logoutState/logout', async (refreshToken, { dispatch }) => {
  return fetch('https://norma.nomoreparties.space/api/auth/logout',
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
      .then(res => dispatch(logoutState()))
    })
})

const userLogout = createSlice({
  name: 'logoutState',
  initialState: {},

  extraReducers: {
    [logout.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [logout.fulfilled]: (state, {payload}) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [logout.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default userLogout.reducer
//export const { setForgotPageVisit } = userLogout.actions