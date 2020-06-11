<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <v-btn @click="back" small elevation="5" ripple color="grey lighten-2"
          >Back</v-btn
        >
      </v-col>
      <v-col cols="12">
        <h1>{{ getPlace.data.result.name }}</h1>
        <div>
          <v-btn
            v-if="getPlace.data.result.website"
            text
            small
            color="primary"
            ripple
            href="getPlace.data.result.website"
            rel="noopener"
            target="_blank"
          >
            Website
          </v-btn>
          <v-rating
            class="ml-4 float-left"
            :value="getPlace.data.result.rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            :readonly="true"
            :dense="true"
            :size="12"
          ></v-rating>
        </div>
        <p class="time">
          Address: {{ getPlace.data.result.formatted_address }}
        </p>
        <p class="time" v-if="getPlace.data.result.international_phone_number">
          Phone: {{ getPlace.data.result.international_phone_number }}
        </p>
        <div v-if="getPlace.data.result.opening_hours">
          <p
            id="open"
            v-if="getPlace.data.result.opening_hours.open_now === true"
          >
            Open
          </p>
          <p
            id="closed"
            v-else-if="getPlace.data.result.opening_hours.open_now === false"
          >
            Closed
          </p>
        </div>
        <v-divider></v-divider>
        <h2>Google Reviews</h2>
        <div
          v-for="review in getPlace.data.result.reviews"
          :key="review.author_name"
        >
          <h5>{{ review.author_name }}</h5>
          <v-rating
            class="ml-4 float-left"
            :value="review.rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            :readonly="true"
            :dense="true"
            :size="8"
          ></v-rating>
          <span class="time"> {{ review.relative_time_description }} </span>
          <p class="time">{{ review.text }}</p>
          <v-divider></v-divider>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  async created() {
    await this.fetchPlace();
  },
  watch: {
    $route: "fetchPlace"
  },
  methods: {
    ...mapActions(["getPlaceAction"]),
    async fetchPlace() {
      const place_id = this.id;
      await this.getPlaceAction(place_id);
    },
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapState(["place"]),
    getPlace() {
      return this.place;
    }
  }
};
</script>

<style scoped>
#open {
  color: darkgreen;
}
#closed {
  color: darkred;
}
.time {
  font-size: 0.8rem;
  color: dimgray;
}
</style>
