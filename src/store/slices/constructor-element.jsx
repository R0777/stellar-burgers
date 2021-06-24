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
        setTotal()
    },
      
    setMiddle(state, {payload}) {
        if (state.middleElement[0]._id === 1) {
        state.middleElement.splice(0,1, payload)
        }
        else {
          state.middleElement.splice(0,0, payload)
        }
        setTotal()
    },
      
    setTotal(state) {
      const total = state.bredElement.concat(state.middleElement);
      console.log(total)
      const totalPrice = total.map(el => el.price + state.total);
        state.total = state.total + total[0].price;
        state.idBasket = total.map(el => state.idBasket.push(el._id))
    },
  },
})


export default constructorElement.reducer
export const {setBulki, setMiddle, setTotal} = constructorElement.actions