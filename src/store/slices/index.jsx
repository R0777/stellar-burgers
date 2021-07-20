import { combineReducers } from '@reduxjs/toolkit';
import dataSlice from './get-data-api';
import getBred from './get-bun';
import ingredientsSlice from './ingredientPopup';
import orderPopup from './orderPopup';
import constructorElement from './constructor-element';
import userDetails from './register';
import loginUserDetails from './login';
import forgotPassword from './forgot-password';
import resetPassword from './reset-password';
import userLogout from './logout';
import refreshToken from './resetToken';
import userReset from './get-user';
import userPatch from './patch-user';


const rootReducer = combineReducers({ 
  api: dataSlice,
  order: orderPopup,
  ingredients: ingredientsSlice,
  bulki: getBred,
  element: constructorElement,
  registerUser: userDetails,
  loginUser: loginUserDetails,
  passwordForgot: forgotPassword,
  passwordReset: resetPassword,
  logoutState: userLogout,
  tokenReset: refreshToken,
  resetUser: userReset,
  patchUser: userPatch
})

export default rootReducer