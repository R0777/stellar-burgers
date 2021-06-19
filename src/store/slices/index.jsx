import { combineReducers } from '@reduxjs/toolkit';
import dataSlice from './get-data-api';
import ingredientsSlice from './get-api-ingredients';
import togglePopup from './popup-toggle';

const rootReducer = combineReducers({
  api: dataSlice,
  popup: togglePopup,
  ingredients: ingredientsSlice
})

export default rootReducer