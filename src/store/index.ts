import { configureStore } from "@reduxjs/toolkit";
import savedItemsReducer from "./slice";

const store = configureStore({
  reducer: {
    savedItems: savedItemsReducer,
  },
});

export default store;
