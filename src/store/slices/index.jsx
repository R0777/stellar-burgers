import { combineReducers } from '@reduxjs/toolkit';
import dataSlice from './get-data-api';
import getBred from './get-bulki';
import ingredientsSlice from './get-api-ingredients';
import orderPopup from './orderPopup';

const rootReducer = combineReducers({
  api: dataSlice,
  order: orderPopup,
  ingredients: ingredientsSlice,
  bulki: getBred
})

export default rootReducer