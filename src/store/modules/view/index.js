import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    isLoading: false,
    data: {},
    error: null,
  },
  getters,
  mutations,
  actions,
};
