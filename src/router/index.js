import Vue from "vue";
import VueRouter from "vue-router";
import Cocktails from "../views/Cocktails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/(cocktail/)?:id?",
    name: "Cocktails",
    component: Cocktails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
