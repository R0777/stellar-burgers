import { createSlice } from '@reduxjs/toolkit'


const togglePopup = createSlice({
  name: 'popup',
  initialState: {
    togglePopup: false
  },
  reducers: {
    popupToggle(state) {
      state.togglePopup = !state.togglePopup
    },
  }
})

export default togglePopup.reducer
export const {popupToggle} = togglePopup.actions