import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./ingredients/ingredientsSlice";
import orderReducer from "./order/orderSlice";
import authReducer from "./auth/authSlice";
import { socketMiddleware } from "../middlewares/socket";

const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    order: orderReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socketMiddleware()),
  devTools: true,
});

export default store;

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;