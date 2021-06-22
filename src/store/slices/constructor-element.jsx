import { createSlice } from '@reduxjs/toolkit'


const constructorElement = createSlice({
  name: 'element',
  initialState: {
    bredElement: [{_id: 0, name: 'Перетащи сюда свои булочки <3', image: "https://code.s3.yandex.net/react/code/bun-02.png"},
    {_id: 1, name: 'Вставляй сюда свои булки живо, не задерживай :P', image: 'https://code.s3.yandex.net/react/code/bun-01.png'}],
    middleElement: [{name: 'Хватит читать вставляй уже то что будет между булочками',image: 'https://code.s3.yandex.net/react/code/mineral_rings.png'}]
  },
  reducers: {
    setBulki(state, {payload}) {
        state.bredElement = state.bredElement.push(payload)
      }
    },
  })


export default constructorElement.reducer
export const {setBulki} = constructorElement.actions