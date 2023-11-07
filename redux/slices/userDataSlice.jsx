// userDataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {},
  reducers: {
    updateUser: (state, action) => {
      // Merge the new user data with the existing state
      return { ...state, ...action.payload };
    },
    // Add more reducers as needed
  },
});

export const { updateUser } = userDataSlice.actions;
export default userDataSlice.reducer;
