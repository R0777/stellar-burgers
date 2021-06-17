import { createSlice } from '@reduxjs/toolkit'

const burgerStoreSlice = createSlice({
  name: 'root',
  initialState: {
    data: [],
    ingredients: [],
    ingredientPopup: {},
    order: {}
  },
  reducers: {
    
  },
}) 

export default burgerStoreSlice.reducer