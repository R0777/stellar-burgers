import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLoginUserData } from './login';
import { getCookie } from '../../utils/cookie'


export const patchUserData = createAsyncThunk('patchUser/patchUserData', async (newUserData, { dispatch }) => {
  return fetch('https://norma.nomoreparties.space/api/auth/user',
  {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getCookie('token')
    },
    body: JSON.stringify({
      'email': newUserData.email,
      'name': newUserData.name,
    })
    
  }).then(res => {
    if(!res.ok) throw Error(res.statusText)
      res.json()
      .then(res => {
      dispatch(setLoginUserData(res.user))
      })
  })
})

export const initialState = {}

const userPatch = createSlice({
  name: 'patchUser',
  initialState,

  extraReducers: {
    [patchUserData.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [patchUserData.fulfilled]: (state, {payload}) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [patchUserData.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default userPatch.reducer
