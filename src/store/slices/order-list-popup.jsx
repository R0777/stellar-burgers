import { createSlice } from '@reduxjs/toolkit'

const orderlistSlice = createSlice({
  name: 'orderlistPop',
  initialState: {
    orders: [],
    total: 0,
    dailyTotal: 0,
    connected: false,
    error: false,
    ordersListPopup: false
  },

  reducers: {

    ordersListPopupToggle(state, action) {
      state.ordersListPopup = action.payload
    },
    wsConnectionOpened: (state) => {
      state.connected = true;
      state.error = false;
    },
    wsGetMessage: (state, action) => {
      const { orders, total, totalToday } = action.payload;
      state.orders = orders;
      state.total = total;
      state.dailyTotal = totalToday;
    },
    wsConnectionClose: (state) => {
      state.connected = false;
      state.error = false;
    },
    wsConnectionError: (state, action) => {
      console.log(`Ошибка ${action.event.message}`)
      state.error = true;
    },
  }
}) 

export default orderlistSlice.reducer
export const {wsConnectionOpened, wsGetMessage, wsConnectionClose, wsConnectionError, ordersListPopupToggle} = orderlistSlice.actions