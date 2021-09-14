import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  buns: []
}

const getBred = createSlice({
  name: 'bun',
  initialState,
  reducers: {
    getBun(state, action) {
      state.buns = action.payload
    },
  }
})

export const bunsArray = state => state.buns
export default getBred.reducer
export const {getBun} = getBred.actions