import {
  GET_COCKTAIL_BY_ID_REQUEST,
  GET_COCKTAIL_BY_ID_SUCCESS,
  GET_COCKTAIL_BY_ID_FAIL,
} from "./contants";

export default {
  [GET_COCKTAIL_BY_ID_REQUEST](state) {
    state.isLoading = true;
  },
  [GET_COCKTAIL_BY_ID_SUCCESS](state, cocktails) {
    state.data = cocktails.drinks[0];
    state.isLoading = false;
  },
  [GET_COCKTAIL_BY_ID_FAIL](state, error) {
    state.error = error;
    state.isLoading = false;
  },
};
