<template>
  <div class="cocktails-favorites">
    <b-button
      id="cocktails-favorites-btn"
      variant="outline-light"
      @click="popupShow = !popupShow"
    >
      <b-icon
        class="h4 mb-0"
        :icon="favoritesList.length ? 'star-fill' : 'star'"
      ></b-icon>
    </b-button>
    <b-popover
      target="cocktails-favorites-btn"
      placement="bottomleft"
      triggers="blur"
      :show.sync="popupShow"
      title="Favorites"
    >
      <span v-if="!favoritesList.length">No data</span>
      <div
        v-for="cocktail in favoritesList"
        :key="cocktail.idDrink"
        class="cocktails-favorites-list-item py-3 px-2"
      >
        <b-img
          :src="cocktail.strDrinkThumb"
          :alt="cocktail.strDrink"
          blank
          blank-color="#f5f5f5"
          width="32"
          class="mr-3"
        ></b-img>
        <h5 class="m-0 mr-3 text-left">{{ cocktail.strDrink }}</h5>
        <b-icon
          class="cocktails-favorites-list-item__star h5 m-0"
          icon="star-fill"
          @click="deleteFavorite(cocktail.idDrink)"
        ></b-icon>
      </div>
    </b-popover>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { DELETE_FAVORITE } from "@/store/modules/cocktails/contants";

export default {
  data() {
    return {
      popupShow: false,
    };
  },
  computed: {
    ...mapState("cocktails", {
      favoritesList: (state) => state.favorites,
    }),
  },
  methods: {
    ...mapMutations("cocktails", {
      deleteFavorite: DELETE_FAVORITE,
    }),
  },
};
</script>

<style lang="scss">
.cocktails-favorites-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cocktails-favorites-list-item__star {
  cursor: pointer;
  color: #a02727;
}
</style>
