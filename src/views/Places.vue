<template>
  <v-container>
    <v-text-field
      v-model="search"
      solo-inverted
      flat
      hide-details
      label="Restaurants in Abuja"
      prepend-inner-icon="mdi-magnify"
      clearable
      @click:prepend-inner="loadPlaces()"
      @keyup.enter="loadPlaces()"
    ></v-text-field>

    <v-row dense v-if="places.data">
      <v-col cols="12" v-if="places.data.next_page_token">
        <v-btn
          @click="nextPage"
          elevation="8"
          ripple
          min-width="100%"
          color="grey lighten-2"
          >Next Page</v-btn
        >
      </v-col>
      <v-col cols="12" v-for="place in places.data.results" :key="place.id">
        <router-link
          id="link"
          :to="{ name: 'places-details', params: { id: place.place_id } }"
        >
          <v-card color="#385F73" dark>
            <div class="d-flex flex-no-wrap justify-flex-start">
              <div>
                <v-card-title class="headline">{{ place.name }}</v-card-title>
                <v-card-subtitle id="address">{{
                  place.formatted_address
                }}</v-card-subtitle>
                <v-rating
                  class="ml-4 float-left"
                  :value="place.rating"
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  hover
                  :readonly="readonly"
                  :dense="dense"
                  :size="size"
                ></v-rating>
                <span id="review" class="text"
                  >({{ place.user_ratings_total }}) Reviews</span
                >
              </div>
            </div>
          </v-card>
        </router-link>
      </v-col>
      <v-col v-if="places.data.next_page_token" cols="12">
        <v-btn
          @click="nextPage"
          elevation="8"
          ripple
          min-width="100%"
          color="grey lighten-2"
          >Next Page</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "places",
  data() {
    return {
      search: "",
      size: 12,
      dense: true,
      readonly: true
    };
  },
  methods: {
    ...mapActions(["getPlacesAction", "nextPageAction"]),
    async loadPlaces() {
      const str = this.search;
      await this.getPlacesAction(str);
    },
    async nextPage() {
      const token = this.places;
      if (token.data.next_page_token) {
        await this.nextPageAction(token.data.next_page_token);
      }
    }
  },
  computed: {
    ...mapState(["places"])
  }
};
</script>

<style scoped>
v-text-field {
  width: 70%;
  position: absolute;
  top: 0;
}
#link {
  text-decoration: none;
}
#review {
  color: rgba(255, 255, 255, 0.7);
  float: left;
  font-size: 0.7rem;
  padding-top: 0.35rem;
}
.text {
  font-size: 0.8rem;
}
#address {
  text-align: left;
}
</style>
