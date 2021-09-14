import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getData = createAsyncThunk('root/getData', async () => {
  return fetch('https://norma.nomoreparties.space/api/ingredients').then(res => {
    if(!res.ok) throw Error(res.statusText)
    return res.json()
  })

})

export const initialState = {
  data: [],
  status: null
}

const dataSlice = createSlice({
  name: 'api',
  initialState,
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [getData.fulfilled]: (state, {payload}) => {
      state.data = payload.data
      state.status = 'Ok'
    },
    [getData.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default dataSlice.reducer