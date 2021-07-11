import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 

export const resetPass = createAsyncThunk('passwordReset/resetPassword', async (userData, { dispatch }) => {
  return fetch('https://norma.nomoreparties.space/api/password-reset/reset',
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'password': userData.password, 
      'token': userData.token
    })
    
  }).then(res => {
    if(!res.ok) throw Error(res.statusText)
      res.json()
    })
})

const resetPassword = createSlice({
  name: 'passwordReset',
  initialState: {},

  extraReducers: {
    [resetPass.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [resetPass.fulfilled]: (state, {payload}) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [resetPass.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default resetPassword.reducer
export const { setForgotPageVisit } = resetPassword.actions