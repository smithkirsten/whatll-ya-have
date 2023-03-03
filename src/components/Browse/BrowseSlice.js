import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drinks: []
};

export const browseSlice = createSlice({
  name: 'browse',
  initialState,
  reducers: {
    updateDrinks: (state, action) => {
      state.drinks = action.payload
    }
  }
})

export const { updateDrinks } = browseSlice.actions;

export default browseSlice.reducer;