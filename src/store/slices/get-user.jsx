import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLoginUserData } from './login';

export const getUserData = createAsyncThunk('resetUser/getUserData', async (token, { dispatch }) => {
  return fetch('https://norma.nomoreparties.space/api/auth/user',
  {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }

    
  }).then(res => {
    if(!res.ok) throw Error(res.statusText)
      res.json()
      .then(res => {
      dispatch(setLoginUserData(res.user))
      })
  })
})

export const initialState = {}

const userReset = createSlice({
  name: 'resetUser',
  initialState,

  extraReducers: {
    [getUserData.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [getUserData.fulfilled]: (state, {payload}) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [getUserData.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default userReset.reducer
