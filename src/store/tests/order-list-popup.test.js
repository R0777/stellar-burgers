import { createSlice } from '@reduxjs/toolkit'

const orderlistSlice = createSlice({
  name: 'orderlistPop',
  initialState: {
    orders: [],
    order: {},
    total: 0,
    dailyTotal: 0,
    connected: false,
    error: false,
    ordersListPopup: false,
    profileOrderPopup: false
  },

  reducers: {

    ordersListPopupToggle(state, action) {
      state.ordersListPopup = action.payload
    },

    profileOrderPopupToggle(state, action) {
      state.profileOrderPopup = action.payload
    },
    setOrder(state, action) {
      state.order = action.payload
      
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
export const {wsConnectionOpened, wsGetMessage, wsConnectionClose, wsConnectionError, ordersListPopupToggle, profileOrderPopupToggle, setOrder} = orderlistSlice.actions