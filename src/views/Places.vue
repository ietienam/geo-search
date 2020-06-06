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

    <v-row dense v-if="placesState.data">
      <v-col
        cols="12"
        v-for="place in placesState.data.results"
        :key="place.id"
      >
        <v-card color="#385F73" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline">{{ place.name }}</v-card-title>
              <v-card-subtitle>{{ place.formatted_address }}</v-card-subtitle>
              <v-rating
                class="ml-3"
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
              <v-card-subtitle class="d-inline"
                >({{ place.user_ratings_total }}) Reviews</v-card-subtitle
              >
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="place.icon"></v-img>
            </v-avatar>
          </div>
        </v-card>
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
    ...mapActions(["getPlacesAction", "getPhotoAction"]),
    async loadPlaces() {
      const str = this.search;
      await this.getPlacesAction(str);
    }
  },
  computed: {
    ...mapState(["places"]),
    placesState() {
      return this.places;
    }
  }
};
</script>

<style scoped>
v-text-field {
  width: 70%;
  position: absolute;
  top: 0;
}
</style>
