import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getOrderDetails = createAsyncThunk('orderInfo/getOrderDetails', async (orderNumber, { dispatch }) => {
  return fetch(`https://norma.nomoreparties.space/api/orders/${orderNumber}`,
  {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    }

  }).then(res => {
    if(!res.ok) throw Error(res.statusText)
      res.json()
      .then(res => {
      dispatch(setOrderInfo(res.orders[0]))
      })
  })
})

const getOrder = createSlice({
  name: 'orderInfo',
  initialState: {
    order: {}
  },
  reducers: {
    setOrderInfo(state, {payload}) {
      state.order = {}
      state.order = payload
    },
  },

  extraReducers: {
    [getOrderDetails.pending]: (state, action) => {
      state.status = 'Загрузка'
    },
    [getOrderDetails.fulfilled]: (state, {payload}) => {
      state.orderId = payload
      state.status = 'Ok'
    },
    [getOrderDetails.rejected]: (state, action) => {
      state.status = 'Error'
      
    },
  }
})

export default getOrder.reducer
export const { setOrderInfo } = getOrder.actions