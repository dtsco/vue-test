<template>
  <div class="cocktails-filter">
    <b-button
      id="cocktails-filter-btn"
      variant="outline-light"
      @click="popupShow = !popupShow"
    >
      <b-icon class="h4 mb-0" icon="filter"></b-icon>
    </b-button>
    <b-form-input
      v-model="search"
      class="ml-md-4 ml-2"
      placeholder="Название коктейля…"
    ></b-form-input>
    <b-popover
      target="cocktails-filter-btn"
      triggers="blur"
      placement="bottomright"
      :show.sync="popupShow"
      title="Filters"
    >
      <b-form-group>
        <b-form-radio-group
          v-model="alcoholic"
          :options="alcoholicOptions"
          buttons
        ></b-form-radio-group>
      </b-form-group>
      <b-form-group>
        <b-form-radio-group
          v-model="category"
          :options="categoryOptions"
          buttons
        ></b-form-radio-group>
      </b-form-group>
    </b-popover>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      popupShow: false,
      alcoholicOptions: [
        { text: "Alcoholic", value: "Alcoholic" },
        { text: "Non Alcoholic", value: "Non_Alcoholic" },
      ],
      categoryOptions: [
        { text: "Ordinary Drink", value: "Ordinary_Drink" },
        { text: "Cocktail", value: "Cocktail" },
      ],
    };
  },
  computed: {
    alcoholic: {
      get() {
        return this.$store.state.cocktails.filters.alcoholic;
      },
      set(value) {
        this.$router.push()
        this.filterCocktailsList({
          field: "alcoholic",
          value,
        });
      },
    },
    category: {
      get() {
        return this.$store.state.cocktails.filters.category;
      },
      set(value) {
        this.filterCocktailsList({
          field: "category",
          value,
        });
      },
    },
    search: {
      get() {
        return this.$store.state.cocktails.filters.search;
      },
      set(value) {
        this.filterCocktailsList({
          field: "search",
          value,
        });
      },
    },
  },
  methods: mapActions("cocktails", ["filterCocktailsList"]),
};
</script>

<style lang="scss">
.cocktails-filter {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
