<template>
  <b-overlay :show="isLoading" rounded="sm">
    <b-row align-h="between">
      <b-col cols="auto"
        ><b-button class="mb-4" variant="outline-primary" @click="hideModal"
          ><b-icon icon="x"></b-icon></b-button
      ></b-col>
      <b-col cols="auto"
        ><b-button
          class="mb-4"
          variant="outline-primary"
          @click="toggleFavorite"
          ><b-icon
            :icon="isFavorite(cocktailInfo.idDrink) ? 'star-fill' : 'star'"
          ></b-icon></b-button
      ></b-col>
    </b-row>
    <b-skeleton-img v-if="isLoading" no-aspect height="350px"></b-skeleton-img>
    <b-img-lazy
      v-else
      :src="cocktailInfo.strDrinkThumb"
      blank-color="#f5f5f5"
      blank-height="350"
      fluid-grow
      center
      alt="cocktailInfo.strDrink"
      class="view-image mb-3"
    ></b-img-lazy>
    <ul class="list-inline">
      <li class="list-inline-item text-secondary">
        {{ cocktailInfo.strAlcoholic }}
      </li>
      <li class="list-inline-item text-secondary">&#8226;</li>
      <li class="list-inline-item text-secondary">
        {{ cocktailInfo.strCategory }}
      </li>
    </ul>
    <h3 class="mb-4">{{ cocktailInfo.strDrink }}</h3>
    <b-table :items="ingredients" bordered small></b-table>
    <p>{{ cocktailInfo.strInstructions }}</p>
  </b-overlay>
</template>

<script>
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";
import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
} from "@/store/modules/cocktails/contants";

export default {
  props: ["id"],
  computed: {
    ...mapState({
      isLoading: (state) => state.view.isLoading,
      cocktailInfo(state) {
        return state.view.data?.idDrink === this.id ? state.view.data : {};
      },
    }),
    ...mapGetters("cocktails", ["isFavorite"]),
    ingredients: function () {
      const cocktailEntries = Object.entries(this.cocktailInfo);
      const ingredientsArray = cocktailEntries.filter(
        ([key, value]) =>
          key.startsWith("strIngredient") && value && value.trim()
      );
      const measuresArray = cocktailEntries.filter(
        ([key, value]) => key.startsWith("strMeasure") && value && value.trim()
      );

      return ingredientsArray.map((item, index) => ({
        ingredient: item[1],
        measure: measuresArray?.[index]?.[1],
      }));
    },
  },
  methods: {
    ...mapActions("view", ["getCocktailInfo"]),
    ...mapMutations("cocktails", {
      addFavorite: ADD_FAVORITE,
      deleteFavorite: DELETE_FAVORITE,
    }),
    hideModal() {
      this.$root.$emit("bv::hide::modal", "view-modal");
    },
    toggleFavorite() {
      if (this.isFavorite(this.cocktailInfo.idDrink)) {
        this.deleteFavorite(this.cocktailInfo.idDrink);
      } else {
        this.addFavorite(this.cocktailInfo);
      }
    },
  },
  created() {
    this.getCocktailInfo(this.id);
  },
};
</script>

<style lang="scss">
.view-image {
  max-height: 350px;
  object-fit: cover;
}
</style>
