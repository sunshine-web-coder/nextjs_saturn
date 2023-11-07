// store.js
import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from '@/redux/slices/userDataSlice';
// Import other reducers if you have them

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    // Add other reducers here
  },
});

export default store;
