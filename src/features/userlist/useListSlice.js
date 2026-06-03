import { createSlice } from "@reduxjs/toolkit";
import { io } from "socket.io-client";

var n = window.localStorage.getItem("nickname");
var nickname = n || prompt("Enter nickname");
window.localStorage.setItem("nickname", nickname);

var socket = io("http://localhost:3600", { query: { nickname } });

export const initialState = {
  socket,
  nickname,
};

socket.on("users", (msg) => {
  console.log("msg::::", msg);
});

export const userListSlice = createSlice({
  initialState,
  name: "UserListSlice",
  reducers: {
    updateUsers: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { updateUsers } = userListSlice.actions;
export default userListSlice.reducer;
