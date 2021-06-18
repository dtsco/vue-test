import Vue from "vue";
import Vuex from "vuex";
import cocktails from "./modules/cocktails";
import view from "./modules/view";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cocktails,
    view,
  },
});
