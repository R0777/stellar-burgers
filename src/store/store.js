import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices'

// function loggerMiddleWare(store) {
//   return function (next) {
//     return function (action) {
//       console.log(action);
//       return next(action);
//     };
//   };
// }; 

export const store = configureStore({
  reducer: rootReducer,
});