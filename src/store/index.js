import Vue from "vue";
import Vuex from "vuex";

import { dataService } from "../shared";
import { GET_PLACES, GET_PLACE, GET_PHOTOS } from "./mutation-types";

Vue.use(Vuex);

const state = () => ({
  places: {}, //places api returns an object
  place: {}, //single place object through placeid
  photo: []
});

const mutations = {
  [GET_PLACES](state, places) {
    state.places = places;
  },
  [GET_PLACE](state, place) {
    state.place = place;
  },
  [GET_PHOTOS](state, photo) {
    state.photo = photo;
  }
};

const actions = {
  async getPlacesAction({ commit }, str) {
    const places = await dataService.getPlaces(str);
    commit(GET_PLACES, places);
  },
  async getPlaceAction({ commit }, id) {
    const place = await dataService.getPlace(id);
    commit(GET_PLACE, place);
  },
  async getPhotoAction({ commit }, reference) {
    const photo = await dataService.getPhotos(reference);
    commit(GET_PHOTOS, photo);
  }
};

/*const getters = {
  places: state => state.places,
  FIND PLACEID OF EACH RESULT IN PLACES STATE WITH GETTER
  place: state => state.place
};*/

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state,
  mutations,
  actions
  //getters
});
