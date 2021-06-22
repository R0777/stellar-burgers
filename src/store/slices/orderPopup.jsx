import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' 

export const getOrderNumber = createAsyncThunk('order/getOrderNumber', async (ingredients, { dispatch }) => {
  return fetch('https://norma.nomoreparties.space/api/orders',
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ingredients: ['60d09b3a142e2a00262fd59d','60d09b3a142e2a00262fd59e','60d09b3a142e2a00262fd5a0']
    })
    
  }).then(res => {
    if(!res.ok) throw Error(res.statusText)
    res.json()
    .then(res => dispatch(setOrderNumer(res.order.number)))
    .then(res => dispatch(orderPopupToggle(true)))
    })
})

const orderPopup = createSlice({
  name: 'order',
  initialState: {
    togglePopup: false,
    orderId: null
  },
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