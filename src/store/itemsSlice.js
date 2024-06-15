import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
    addItem: (state, action) => {
      state.unshift(action.payload);
    },
    deleteItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      return state;
    },
    editItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
      state.unshift(action.payload);
      return state;
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;
