import * as axios from "axios";

import { PLACE, DETAILS, PHOTO, PROXY } from "./config";

const getPlaces = async function(str) {
  try {
    const places = await axios.get(
      `${PROXY}${PLACE}query=${str}&key=${process.env.VUE_APP_KEY}`
    );
    return places;
  } catch (error) {
    return `OOPS! Something went wrong. ERROR: ${error}`;
  }
};

const getPlace = async function(id) {
  try {
    const place = await axios.get(
      `${PROXY}${DETAILS}place_id=${id}&key=${process.env.VUE_APP_KEY}`
    );
    return place;
  } catch (error) {
    return `OOPS! Something went wrong. ERROR: ${error}`;
  }
};

const getPhotos = async function(photoreference) {
  try {
    const photos = await axios.get(
      `${PROXY}${PHOTO}&photoreference=${photoreference}&key=${process.env.VUE_APP_KEY}`
    );
    return photos;
  } catch (error) {
    return `OOPS! Something went wrong. ERROR: ${error}`;
  }
};

export const dataService = {
  getPlaces,
  getPlace,
  getPhotos
};
