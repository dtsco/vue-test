import cocktails from "@/api/cocktails";
import {
  GET_COCKTAILS_LIST_REQUEST,
  GET_COCKTAILS_LIST_SUCCESS,
  GET_COCKTAILS_LIST_FAIL,
  CHANGE_FILTER,
} from "./contants";

export default {
  async getCocktailsList({ commit, state }) {
    try {
      commit(GET_COCKTAILS_LIST_REQUEST);
      let res = await cocktails.getCocktails(
        state.filters.search,
        state.filters.alcoholic,
        state.filters.category
      );
      commit(GET_COCKTAILS_LIST_SUCCESS, res);
    } catch (error) {
      commit(GET_COCKTAILS_LIST_FAIL, error);
    }
  },

  filterCocktailsList({ commit, dispatch }, value) {
    commit(CHANGE_FILTER, value);
    dispatch("getCocktailsList");
  },
};
