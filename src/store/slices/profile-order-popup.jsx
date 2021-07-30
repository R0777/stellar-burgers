import { createSlice } from '@reduxjs/toolkit'

const profileOrderSlice = createSlice({
  name: 'profileOrderlistPop',
  initialState: {
    profileOrder: {},
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