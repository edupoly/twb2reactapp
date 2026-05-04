import { createSlice } from "@reduxjs/toolkit";
//state
const initialState = {
  user: {},
};

//logic
export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    upadateUser: (state, action) => {
      state.user = { ...action.payload };
    },
  },
});

export const { upadateUser } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
