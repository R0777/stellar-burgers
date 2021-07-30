import { createSlice } from '@reduxjs/toolkit'

const orderlistSlice = createSlice({
  name: 'orderlistPop',
  initialState: {
    order: {},
    ordersListPopup: false
  },
  reducers: {
    ordersListPopupToggle(state, action) {
      state.ordersListPopup = action.payload
    },
    setOrder(state, {payload}) {
      state.order = payload
    },
  }
}) 

export default orderlistSlice.reducer
export const {setOrder, ordersListPopupToggle} = orderlistSlice.actions