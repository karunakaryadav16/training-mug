import { configureStore } from "@reduxjs/toolkit";
import savedItemsReducer, { SavedItemsState } from "./slice";

export type RootState = {
  savedItems: SavedItemsState;
};

const store = configureStore({
  reducer: {
    savedItems: savedItemsReducer,
  },
});

export default store;







