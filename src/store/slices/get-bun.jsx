import { createSlice } from '@reduxjs/toolkit'


const getBred = createSlice({
  name: 'bun',
  initialState: {
    buns: []
  },
  reducers: {
    getBun(state, action) {
      state.buns = action.payload
    },
  }
})

export default getBred.reducer
export const {getBun} = getBred.actions