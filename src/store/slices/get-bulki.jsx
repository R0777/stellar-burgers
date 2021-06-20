import { createSlice } from '@reduxjs/toolkit'


const getBred = createSlice({
  name: 'bulki',
  initialState: {
    bulki: []
  },
  reducers: {
    getBulki(state, action) {
      state.bulki = action.payload
    },
  }
})

export default getBred.reducer
export const {getBulki} = getBred.actions