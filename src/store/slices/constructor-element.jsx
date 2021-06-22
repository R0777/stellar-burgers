import { createSlice } from '@reduxjs/toolkit'


const constructorElement = createSlice({
  name: 'element',
  initialState: {
    bredElement: [],
    moddleElement: []
  },
  reducers: {
    getBulki(state, action) {
      state.bulki = action.payload
    },
  }
})

export default constructorElement.reducer
export const {getBulki} = constructorElement.actions