<template>
  <div id="app">
    <header>
      <b-navbar type="dark" variant="primary" class="mb-4">
        <b-container>
          <b-navbar-nav>
            <b-nav-form>
              <cocktails-filter></cocktails-filter>
            </b-nav-form>
          </b-navbar-nav>
          <b-navbar-nav class="ml-2">
            <b-nav-text>
              <cocktails-favorites></cocktails-favorites>
            </b-nav-text>
          </b-navbar-nav>
        </b-container>
      </b-navbar>
    </header>
    <main>
      <b-container>
        <router-view />
      </b-container>
    </main>

    <!--    <div id="nav">-->
    <!--      <router-link to="/">Home</router-link> |-->
    <!--      <router-link to="/about">About</router-link>-->
    <!--    </div>-->
  </div>
</template>

<script>
import CocktailsFilter from "@/components/CocktailsFilter";
import CocktailsFavorites from "@/components/CocktailsFavorites";

export default {
  components: {
    CocktailsFilter,
    CocktailsFavorites,
  },
  data() {
    return {
      popupShow: false,
    };
  },
};
</script>

<style lang="scss"></style>
