import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 

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

export const initialState = {
  "forgotPageVisit": false,
}

const forgotPassword = createSlice({
  name: 'passwordForgot',
  initialState,
<<<<<<< HEAD
=======
  
>>>>>>> 20bd6fb427c5c0b78cea4512f6daf680f5d67eab
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