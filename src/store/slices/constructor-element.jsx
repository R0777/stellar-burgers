import { createSlice } from '@reduxjs/toolkit'
import shortid from 'shortid'

const constructorElement = createSlice({
  name: 'element',
  initialState: {
    bredElement: [],
    middleElement: [],
    // bredElement: [{_id: 0, name: 'Перетащи сюда свои булочки <3', price: null}],
    // middleElement: [{_id: 1, name: 'Хватит читать вставляй уже то что будет между булочками', price: null}],
    elementAmount: 0,
    total: 0,
    idBasket: []
  },

  reducers: {

    setBun(state, {payload}) {

      payload.ver = shortid.generate();
      state.bredElement.splice(0,1, payload)
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
      total.map(el => state.idBasket.push(el.id))
    },

    resetStore(state) {
      state.bredElement = []
      state.middleElement = []
      state.total =  0
      state.idBasket = []
    },

    elementCounter(state, {payload}) {
      const fullArr = state.bredElement.concat(state.middleElement);
      console.log(fullArr, payload)
      const amount =  fullArr.filter(item => item.name === payload);
      console.log(amount)
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


export default constructorElement.reducer
export const {setBun, setTopMiddle, setTotal, deleteMiddle, sortConstructor, resetStore, elementCounter} = constructorElement.actions