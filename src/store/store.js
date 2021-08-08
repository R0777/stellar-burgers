import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';
import { socketMiddleware } from './middleware/socketMiddleware';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware()),
});