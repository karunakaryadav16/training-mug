import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SavedItemsState {
  savedPictures: number[];
  savedPosts: number[];
}

const initialState: SavedItemsState = {
  savedPictures: [],
  savedPosts: [],
};

const savedItemsSlice = createSlice({
  name: "savedItems",
  initialState,
  reducers: {
    savePicture(state, action: PayloadAction<number>) {
      state.savedPictures.push(action.payload);
    },
    unsavePicture(state, action: PayloadAction<number>) {
      state.savedPictures = state.savedPictures.filter((id) => id !== action.payload);
    },
    savePost(state, action: PayloadAction<number>) {
      state.savedPosts.push(action.payload);
    },
    unsavePost(state, action: PayloadAction<number>) {
      state.savedPosts = state.savedPosts.filter((id) => id !== action.payload);
    },
  },
});

export const { savePicture, savePost, unsavePicture, unsavePost } = savedItemsSlice.actions;
export default savedItemsSlice.reducer;

