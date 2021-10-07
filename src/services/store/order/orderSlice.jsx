import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { constructorAPI } from "../../api/constructor";


export const postOrder = createAsyncThunk(
  "order/postOrder",
  async (idArray) => {
    try {
      return await constructorAPI.postOrder({ ingredients: idArray });
    } catch (err) {
      console.log(`### err.message`, err.message);
    }
  }
);

export const wsConnectionStart = createAction(
  "order/wsConnectionStart"
);
export const wsConnectionClose = createAction("order/wsConnectionClose");

export const initialState = {
  orderMade: {},
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
  wsError: null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    cleanOrderMade: (state) => {
      state.orderMade = {};
    },
    cleanOrders: (state) => {
      state.orders = [];
    },
    wsConnectionOpened: (state) => {
      state.wsConnected = true;
      state.wsError = null;
    },
    wsGotMessage: (state, action) => {
      const { orders, total, totalToday } = action.payload;
      state.orders = orders;
      state.total = total;
      state.totalToday = totalToday;
    },
    wsGotError: (state, action) => {
      state.wsError = action.payload;
      state.wsConnected = false;
    },
    wsClosed: (state) => {
      state.wsError = null;
      state.wsConnected = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postOrder.fulfilled, (state, action) => {
      state.orderMade = action.payload;
    });
  },
});

export const {
  cleanOrderMade,
  wsClosed,
  wsConnectionOpened,
  wsGotError,
  wsGotMessage,
  cleanOrders,
} = orderSlice.actions;

export default orderSlice.reducer;
