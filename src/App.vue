<template>
  <v-app id="app">
    <v-app-bar app clipped-left color="grey lighten-2">
      <router-link to="/" class="links">
        <span class="title ml-3 mr-5"
          >Geo&nbsp;<span class="font-weight-light" id="invert"
            >Search</span
          ></span
        >
      </router-link>
      <router-link to="/places" class="links">
        <v-btn>
          <span>Find Places</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <v-container class="grey lighten-4 fill-height">
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer absolute="false" app>
      <a
        id="link"
        href="https://enie.netlify.app"
        target="_blank"
        rel="no-opener"
      >
        <small>&copy; Ini Etienam</small>
      </a>
    </v-footer>
  </v-app>
</template>

<style>
#link {
  text-align: center;
  margin: 0 auto;
  text-decoration: none;
  color: darkslategray;
}

#blue {
  color: #01579b;
}

#invert {
  color: snow;
  background-color: darkslategray;
}

.links,
.links span {
  text-decoration: none;
  color: darkslategray;
}
</style>
