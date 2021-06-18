import cocktails from "@/api/cocktails";
import {
  GET_COCKTAIL_BY_ID_REQUEST,
  GET_COCKTAIL_BY_ID_SUCCESS,
  GET_COCKTAIL_BY_ID_FAIL,
} from "./contants";

export default {
  async getCocktailInfo({ commit }, id) {
    try {
      commit(GET_COCKTAIL_BY_ID_REQUEST);
      let res = await cocktails.getCocktailById(id);
      commit(GET_COCKTAIL_BY_ID_SUCCESS, res);
    } catch (error) {
      commit(GET_COCKTAIL_BY_ID_FAIL, error);
    }
  },
};
