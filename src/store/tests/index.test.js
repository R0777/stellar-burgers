import { combineReducers } from '@reduxjs/toolkit';
import dataSlice from './get-data-api.test';
import getBred from './get-bun.test';
import ingredientsSlice from './ingredient-popup.test';
import orderPopup from './order-popup.test';
import constructorElement from './constructor-element';
import userDetails from './register.test';
import loginUserDetails from './login.test';
import forgotPassword from './forgot-password';
import resetPassword from './reset-password.test';
import userLogout from './logout.test';
import refreshToken from './reset-token.test';
import userReset from './get-user.test';
import userPatch from './patch-user.test';
import orderlistSlice from './order-list-popup.test';
import getOrderDetails from './get-order-details.test';



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
  patchUser: userPatch,
  orderlistPop: orderlistSlice,
  orderInfo: getOrderDetails
})

export default rootReducer