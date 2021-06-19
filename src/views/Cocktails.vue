<template>
  <section>
    <b-overlay :show="isLoading" rounded="sm">
      <b-row>
        <b-col v-for="cocktail in cocktailsList" :key="cocktail.idDrink" md="4">
          <b-card
            no-body
            class="cocktail-card mb-4"
            @click="showView(cocktail.idDrink)"
          >
            <b-card-img-lazy
              :src="cocktail.strDrinkThumb"
              :alt="cocktail.strDrink"
              top
              blank-color="#f5f5f5"
              height="300"
              blank-height="300"
              class="cocktail-img"
            ></b-card-img-lazy>
            <b-card-body>
              <b-card-title>{{ cocktail.strDrink }}</b-card-title>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-overlay>
    <b-modal
      v-model="modalShow"
      id="view-modal"
      size="md"
      hide-header
      hide-footer
    >
      <cocktail-view :id="$route.params.id"></cocktail-view>
    </b-modal>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CocktailView from "@/components/CocktailView.vue";

export default {
  name: "Cocktails",
  components: {
    CocktailView,
  },
  data() {
    return {
      modalShow: false,
    };
  },
  computed: mapState({
    isLoading: (state) => state.cocktails.isLoading,
    cocktailsList: (state) => state.cocktails.list,
  }),
  methods: {
    ...mapActions("cocktails", ["getCocktailsList"]),
    showView(id) {
      this.$router.push(`/cocktail/${id}`);
      this.modalShow = true;
    },
    handleCloseView() {
      this.$router.push("/");
    },
  },
  created() {
    this.getCocktailsList();
  },
  mounted() {
    this.$root.$on("bv::modal::hide", this.handleCloseView);
    if (this.$route.params.id) {
      this.modalShow = true;
    }
  },
};
</script>

<style lang="scss">
.cocktail-card {
  cursor: pointer;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
}
.cocktail-img {
  height: 300px;
  object-fit: cover;
}
</style>
