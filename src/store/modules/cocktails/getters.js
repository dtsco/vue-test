export default {
  isFavorite: (state) => (id) => {
    return state.favorites.some((cocktail) => cocktail.idDrink === id);
  },
};
