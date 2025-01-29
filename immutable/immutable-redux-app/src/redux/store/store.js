import { configureStore } from "@reduxjs/toolkit";
import dataSlicer from "../stateSlice/dataSlicer";

const store = configureStore({
  reducer: {
    Data: dataSlicer,
  },
});

export default store;
