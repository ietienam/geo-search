<template>
  <v-app id="app">
    <v-app-bar
      app
      clipped-left
      color="grey lighten-2"
    >
      <router-link to="/" class="links">
        <span class="title ml-3 mr-5">Geo&nbsp;<span class="font-weight-light" id="invert">Search</span></span>
      </router-link>
      <router-link to="/Places" class="links">
        <v-btn>
          <span>Find Places</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container
        class="grey lighten-4 fill-height"
      >
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {},
    data: () => ({
      search: '',
    }),
  }
</script>

<style>
#blue {
  color: #01579b;
}

#invert {
  color: snow;
  background-color:darkslategray;
}

.links, .links span {
  text-decoration: none;
  color: darkslategray;
}
</style>
