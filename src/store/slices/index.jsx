import { combineReducers } from '@reduxjs/toolkit';
import dataSlice from './get-data-api';
import getBred from './get-bun';
import ingredientsSlice from './ingredientPopup';
import orderPopup from './orderPopup';
import constructorElement from './constructor-element';

const rootReducer = combineReducers({ 
  api: dataSlice,
  order: orderPopup,
  ingredients: ingredientsSlice,
  bulki: getBred,
  element: constructorElement
})

export default rootReducer