import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import { getCookie } from '../../utils/cookie'

export const forgotPass = createAsyncThunk('passwordForgot/forgotPassword', async (email, { dispatch }) => {
  return fetch('https://norma.nomoreparties.space/api/password-reset',
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email": email, 
    })
    
  }).then(res => {
    if(!res.ok) throw Error(res.statusText)
      return res.json()
    })
})

const forgotPassword = createSlice({
  name: 'passwordForgot',
  initialState: {
    "forgotPageVisit": false,
  },
  reducers: {

    setForgotPageVisit(state, action) {
      state.forgotPageVisit = action.payload
    }

  },

  extraReducers: {
    [forgotPass.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [forgotPass.fulfilled]: (state, {payload}) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [forgotPass.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default forgotPassword.reducer
export const { setForgotPageVisit } = forgotPassword.actions