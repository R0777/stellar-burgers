import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  ingredient: {},
  ingredientPopup: false
}

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
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