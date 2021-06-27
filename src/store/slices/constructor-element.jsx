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
      

    setTopMiddle(state, {payload}) {


      if (state.middleElement.length === 0) {
        state.middleElement.splice(0,0, payload)
      }

      else if (state.middleElement[0]._id !== undefined) {
      state.middleElement.splice(0,1, payload)
      }

      else  {
      const itemIndex = state.middleElement.findIndex(item => item.id === payload.id)

      const inArray = state.middleElement.find(item => item.id === payload.id)


        if(!inArray) {
          state.middleElement.splice(0,0, payload)

        }
        else if (inArray) {
          const itemIndexArray = state.middleElement.findIndex(item => item.id === inArray.id)
          state.middleElement.splice(itemIndexArray,1, payload)
        }
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

    sortConstructor(state,action) {
    

    if (state.middleElement[0]._id  !== undefined) {
        
        state.middleElement.splice(0,1, action.payload.item)
      }
      else if (state.middleElement.length >= 1) {
        
        const targetIndex = state.middleElement.findIndex(item => item.id === action.payload.props.id)

        const inArray = state.middleElement.find(item => item.id === action.payload.item.id)

        if (!inArray) {
          state.middleElement.splice(targetIndex+1,0, action.payload.item)
        }
        else {
          const itemIndex = state.middleElement.findIndex(item => item.id === action.payload.item.id)

          state.middleElement.splice(itemIndex,1)

          state.middleElement.splice(targetIndex+1,0, action.payload.item)

          
        }
      }
      else {
                  //state.middleElement.splice(itemIndex,1);
          state.middleElement.splice(0,0, action.payload.item);
      }
    }
  },
})


export default constructorElement.reducer
export const {setBulki, setTopMiddle, setTotal, deleteMiddle, sortConstructor, resetStore} = constructorElement.actions