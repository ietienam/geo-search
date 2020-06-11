import Vue from "vue";
import Vuex from "vuex";

import { dataService } from "../shared";
import { GET_PLACES, GET_PLACE, NEXT_PAGE } from "./mutation-types";

Vue.use(Vuex);

const state = () => ({
  places: {}, //places api returns an object
  place: {}, //single place object through placeid
  token: []
});

const mutations = {
  [GET_PLACES](state, places) {
    state.token = [];
    state.backToken = "";
    state.places = places;
    if (state.places.data.next_page_token) {
      state.token.push(places.data.next_page_token);
    }
  },
  [NEXT_PAGE](state, places) {
    state.places = places;
    if (state.places.data.next_page_token) {
      state.token.push(state.places.data.next_page_token);
    }
  },
  [GET_PLACE](state, place) {
    state.place = place;
  }
};

const actions = {
  async getPlacesAction({ commit }, str) {
    const places = await dataService.getPlaces(str);
    commit(GET_PLACES, places);
  },
  async nextPageAction({ commit }, str) {
    const places = await dataService.nextPage(str);
    commit(NEXT_PAGE, places);
  },
  async getPlaceAction({ commit }, id) {
    const place = await dataService.getPlace(id);
    commit(GET_PLACE, place);
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
