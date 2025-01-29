import { createSlice } from "@reduxjs/toolkit";
import { List } from "immutable";

export const dataSlicer = createSlice({
  name: "Data",
  initialState: {
    data: List(),
  },

  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlicer.actions;

export default dataSlicer.reducer;
