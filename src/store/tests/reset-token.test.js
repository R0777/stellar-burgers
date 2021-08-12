import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLoginAccessToken, setLoginRefreshToken } from './login.test';
import { getUserData } from './get-user.test';
import { getCookie } from '../../utils/cookie';

export const resetToken = createAsyncThunk('tokenReset/resetToken', async (refreshToken, { dispatch }) => {
  console.log(refreshToken)
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
      console.log(res)
      if (!res.ok) throw Error(res.statusText)
      res.json()
        .then(res => {
          dispatch(setLoginAccessToken(res.accessToken))
          dispatch(setLoginRefreshToken(res.refreshToken))
        })
        .then(res => dispatch(getUserData(getCookie('token'))))
    })
})

const refreshToken = createSlice({
  name: 'tokenReset',
  initialState: {},


  extraReducers: {
    [resetToken.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [resetToken.fulfilled]: (state, { payload }) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [resetToken.rejected]: (state, action) => {
      state.status = 'Error'

    },
  }
})

export default refreshToken.reducer
