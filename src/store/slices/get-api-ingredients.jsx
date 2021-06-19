import { createSlice } from '@reduxjs/toolkit'


const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredients: []
  },
  reducers: {
    orderPopupToggle(state) {
      state.orderPopup = !state.orderPopup
    },
    ingredientPopupToggle(state) {
      state.ingredientPopup = !state.ingredientPopup
    },
  }
}) 

export default ingredientsSlice.reducer
export const {orderPopupToggle, ingredientPopupToggle} = ingredientsSlice.actions