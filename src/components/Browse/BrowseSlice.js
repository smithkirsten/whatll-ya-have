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
    },
    toggleFavorite: (state, action) => {
      const drink = state.drinks.find(drink => drink.idDrink === action.id)
      const otherDrinks = state.drinks.filter(drink => drink.idDrink !== action.id)
      return [
        ...otherDrinks,
        {
          ...drink,
          fav: !drink.fav
        }
      ]
    }
  }
})

export const { updateDrinks, toggleFavorite } = browseSlice.actions;

export default browseSlice.reducer;