<template>
  <div id="row">
    <div id="container">
      <h1>Geo&nbsp;<span class="search">Search</span></h1>
      <h4>Find Hotels, Restaurants, Night Clubs and much more</h4>
      <h4>in your city or any city</h4>
    </div>
    <div class="route">
      <router-link to="/Places" class="links">
        <v-btn :elevation="14">
          <span>Find Places</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </router-link>
    </div>
    <div>
      <p>Sample search: <span class="search">Hotels in Lagos</span></p>
      <p>Your search must include the kind of place you're looking for
         and the city in which you wish to conduct the search
      </p>
    </div>
  </div>
</template>

<style scoped>
  .route {
    width: 100%;
    text-align: center;
  }

  #container {
    margin: 0 auto;
    width: 100%;
    text-align: center;
  }

  #row {
    display: flex;
    min-width: 100%;
    min-height: 100%;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  h1 {
    font-weight: 800;
  }

  .search {
    background-color: darkslategray;
    color: snow;
    font-weight: 300;
  }
</style>
