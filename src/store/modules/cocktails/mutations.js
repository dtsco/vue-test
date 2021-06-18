import {
  GET_COCKTAILS_LIST_REQUEST,
  GET_COCKTAILS_LIST_SUCCESS,
  GET_COCKTAILS_LIST_FAIL,
  CHANGE_FILTER,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "./contants";

export default {
  [GET_COCKTAILS_LIST_REQUEST](state) {
    state.isLoading = true;
  },
  [GET_COCKTAILS_LIST_SUCCESS](state, cocktails) {
    state.list = cocktails.drinks;
    state.isLoading = false;
  },
  [GET_COCKTAILS_LIST_FAIL](state, error) {
    state.error = error;
    state.isLoading = false;
  },
  [CHANGE_FILTER](state, { field, value }) {
    state.filters[field] = value;
  },
  [ADD_FAVORITE](state, cocktail) {
    state.favorites.push(cocktail);
  },
  [DELETE_FAVORITE](state, cocktailId) {
    state.favorites = state.favorites.filter(
      (item) => item.idDrink !== cocktailId
    );
  },
};
