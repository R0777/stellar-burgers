import { createSlice } from '@reduxjs/toolkit'

const profileOrderSlice = createSlice({
  name: 'profileOrderlistPop',
  initialState: {
    orders: [],
    total: 0,
    dailyTotal: 0,
    onnected: false,
    error: false,
    profileOrderPopup: true
  },
  reducers: {
    profileOrderPopupToggle(state, action) {
      state.profileOrderPopup = action.payload
    },
    setProfileOrder(state, {payload}) {
      state.profileOrder = payload
    },
  }
}) 

export default profileOrderSlice.reducer
export const {setProfileOrder, profileOrderPopupToggle} = profileOrderSlice.actions