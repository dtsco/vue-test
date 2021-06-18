import request from "@/utils/request";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1";

export default {
  getCocktails(searchText = "", alcoholic, category) {
    return request(`${baseUrl}/search.php`, {
      params: {
        s: searchText,
        a: alcoholic,
        c: category,
      },
    });
  },

  getCocktailById(id) {
    return request(`${baseUrl}/lookup.php`, {
      params: {
        i: id,
      },
    });
  },
};
