import { configureStore, combineReducers } from '@reduxjs/toolkit';
import burgerStoreSlice from './slices'

const rootReducer = (combineReducers({
reducer: burgerStoreSlice
}))


export const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  // preloadedState
})