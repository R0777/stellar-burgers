import { createSlice } from '@reduxjs/toolkit'


const constructorElement = createSlice({
  name: 'element',
  initialState: {
    bredElement: [{_id: 0, name: 'Перетащи сюда свои булочки <3', image: "https://code.s3.yandex.net/react/code/bun-02.png", price: null}],
    middleElement: [{_id: 1, name: 'Хватит читать вставляй уже то что будет между булочками',image: 'https://code.s3.yandex.net/react/code/mineral_rings.png', price: null}],
    total: 0,
    idBasket: []
  },

  reducers: {

    setBulki(state, {payload}) {
        state.bredElement.splice(0,1, payload)
    },
      
    setMiddle(state, {payload}) {
        if (state.middleElement[0]._id !== 1) {
          state.middleElement.splice(0,0, payload)
        }
        else {
          state.middleElement.splice(0,1, payload)
        }
    },

    deleteMiddle(state, {payload}) {
      const newArray = state.middleElement.filter(item => item.id !== payload);
      state.middleElement = newArray
    },
      
    setTotal(state,{payload}) {
      
      const total = payload.bulki.concat(payload.data);
      const totalPrice = total.map(el => el.price);
      state.total = totalPrice.reduce((sum, current) => {
      return sum + current;
      },0)
      total.map(el => state.idBasket.push(el.id))
    },

    resetStore(state) {
      state.bredElement = [{_id: 0, name: 'Перетащи сюда свои булочки <3', image: "https://code.s3.yandex.net/react/code/bun-02.png", price: null}]
      state.middleElement = [{_id: 1, name: 'Хватит читать вставляй уже то что будет между булочками',image: 'https://code.s3.yandex.net/react/code/mineral_rings.png', price: null}]
      state.total =  0
      state.idBasket = []
    },

    sortConstructor(state,{payload}) {
      const fullArr = state.bredElement.concat(state.middleElement);
      const index = fullArr.indexOf(payload);
      fullArr.splice()
    }

  },
})


export default constructorElement.reducer
export const {setBulki, setMiddle, setTotal, deleteMiddle, sortConstructor} = constructorElement.actions