import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: " binod", email: " binod@gmail.com" },
  { id: "2", name: " bino", email: " bino@gmail.com" },
  { id: "3", name: " bin", email: " bin@gmail.com" },
];

export const formSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const currentUser = state.find((user) => user.id === id);
      if (currentUser) {
        currentUser.name = name;
        currentUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const currentUser = state.find((user) => user.id === id);
      if (currentUser) {
        return (state = state.filter((user) => user.id !== id));
      }
    },
  },
});
export const { addUser, editUser, deleteUser } = formSlice.actions;

export default formSlice.reducer;
