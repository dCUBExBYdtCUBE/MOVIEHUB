import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Your combined reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
