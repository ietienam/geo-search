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
    ></v-text-field>

    <v-row dense>
      <v-col cols="12">
        <v-card color="#385F73" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline"></v-card-title>
              <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover
                :readonly="readonly"
                :dense="dense"
                :size="size"
              ></v-rating>
              <v-card-subtitle></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Places",
  data() {
    return {
      search: "",
      rating: 0,
      size: 12,
      dense: true,
      readonly: true,
    };
  },
};
</script>

<style scoped>
v-text-field {
  width: 70%;
  position: absolute;
  top: 0;
}
</style>
