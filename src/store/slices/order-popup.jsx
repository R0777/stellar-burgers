import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 
import { resetStore } from './constructor-element'
import { getCookie } from '../../utils/cookie'

export const getOrderNumber = createAsyncThunk('order/getOrderNumber', async (idBasket, { dispatch }) => {
  return fetch('https://norma.nomoreparties.space/api/orders',
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getCookie('token')
    },

    body: JSON.stringify({
      ingredients: idBasket
    })
    
  }).then(res => {
    if(!res.ok) throw Error(res.statusText)
    res.json()
    .then(res => dispatch(setOrderNumer(res.order.number)))
    .then(res => dispatch(orderPopupToggle(true)))
    .then(res => dispatch(resetStore()))
    })
})

export const initialState = {
  togglePopup: false,
  orderId: null
}

const orderPopup = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderPopupToggle(state, action) {
      state.togglePopup = action.payload
    },
    setOrderNumer(state, action) {
      state.orderId = action.payload
    },


  },
  extraReducers: {
    [getOrderNumber.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [getOrderNumber.fulfilled]: (state, {payload}) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [getOrderNumber.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default orderPopup.reducer
export const { orderPopupToggle, setOrderNumer } = orderPopup.actions