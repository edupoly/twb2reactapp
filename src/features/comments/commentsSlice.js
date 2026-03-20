import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: "commentSlicu",
  initialState,
  reducers: {
    addComment: (state, action) => {
      alert(JSON.stringify(action.payload));
      if (action.payload.i >= 0) {
        state.comments[action.payload.i].reply.push(action.payload.values);
      } else {
        state.comments.push(action.payload.values);
      }
    },
  },
});

export const { addComment } = commentsSlice.actions;
const commentsReducer = commentsSlice.reducer;
export default commentsReducer;
