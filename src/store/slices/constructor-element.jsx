import { createSlice } from '@reduxjs/toolkit'
import shortid from 'shortid'

export const initialState = {
  bredElement: [],
  middleElement: [],
  elementAmount: 0,
  total: 0,
  idBasket: []
}

export var version = shortid.generate();

const constructorElement = createSlice({
  name: 'element',
  initialState,

  reducers: {

    setBun(state, action) {
      action.payload.ver = version;
      state.bredElement.splice(0,1, action.payload)
    },  

    setTopMiddle(state, {payload}) {


      if (state.middleElement.length === 0) {

        state.middleElement.splice(0,0, payload)
      }

      else if (state.middleElement[0]._id !== undefined) {
      state.middleElement.splice(0,0, payload)
      }

    },

    deleteMiddle(state, {payload}) {
      const newArray = state.middleElement.filter(item => item.ver !== payload);
      state.middleElement = newArray
    },
      
    setTotal(state,{payload}) {
      
      const total = payload.bun.concat(payload.data);
      const totalPrice = total.map(el => el.price);
      state.total = totalPrice.reduce((sum, current) => {
      return sum + current;
      },0)
      state.idBasket = []
      total.forEach(el => state.idBasket.push(el.id))
    },

    resetStore(state) {
      state.bredElement = []
      state.middleElement = []
      state.total =  0
      state.idBasket = []
    },

    elementCounter(state, {payload}) {
      const fullArr = state.bredElement.concat(state.middleElement);
      const amount =  fullArr.filter(item => item.name === payload);
      state.elementAmount = amount.length
    },

    sortConstructor(state,action) {

    if (state.middleElement[0].ver === null) {
      state.middleElement[0].ver = shortid.generate()

      }
      else if (state.middleElement.length >= 1) {

        const verIndex = state.middleElement.findIndex(item => item.ver === action.payload.item.ver)

        const targetIndex = state.middleElement.findIndex(item => item.ver === action.payload.props.ver)
        
        const inArray = state.middleElement.find(item => item.ver === action.payload.item.ver)
        
        if (!inArray) {
          
          state.middleElement.splice(targetIndex+1,0, action.payload.item)
        }
        else {

          state.middleElement.splice(verIndex,1)
          state.middleElement.splice(targetIndex,0, action.payload.item)

        }
      }
      else {
          state.middleElement.splice(0,0, action.payload.item);
      }
    }
  },
})

  export const bredElement = state => state.bredElement
  export const middleElement = state => state.middleElement
  export const elementAmount = state => state.elementAmount
  export const total = state => state.total
  export const idBasket = state => state.idBasket


export default constructorElement.reducer
export const {setBun, setTopMiddle, setTotal, deleteMiddle, sortConstructor, resetStore, elementCounter} = constructorElement.actions