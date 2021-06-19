import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getData = createAsyncThunk('root/getData', async () => {
  return fetch('https://norma.nomoreparties.space/api/ingredients').then(res => {
    if(!res.ok) throw Error(res.statusText)
    return res.json()
  })
  // .then(json => json)
})


const dataSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    status: null
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [getData.fulfilled]: (state, {payload}) => {
      console.log(payload)
      state.data = payload
      state.status = 'Ok'
    },
    [getData.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default dataSlice.extraReducers