<template>
  <v-app>
    <v-app-bar app color="light-blue darken-4" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-spacer></v-spacer>
      <router-link to="/loja" class="white--text mx-3">Loja</router-link>
      <router-link to="/servicos" class="white--text mx-3">Serviços</router-link>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
}
</style>