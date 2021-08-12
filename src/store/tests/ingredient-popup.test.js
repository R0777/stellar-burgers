import { createSlice } from '@reduxjs/toolkit'

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    ingredient: {},
    ingredientPopup: false
  },
  reducers: {
    ingredientPopupToggle(state, action) {
      state.ingredientPopup = action.payload
    },
    setIngredient(state, {payload}) {
      state.ingredient = payload
    },
  }
}) 

export default ingredientsSlice.reducer
export const {setIngredient, ingredientPopupToggle} = ingredientsSlice.actions