import * as axios from 'axios';

import {PLACE, DETAILS, KEY, PHOTO} from './config';

const getPlaces = async function(str) {
  try {
    const places = await axios.get(`${PLACE}query=${str}&key=${KEY}`);
    const data = await places.json();
    return data;
  } catch (error) {
    console.error(error);
    return `OOPS! Something went wrong. ERROR: ${error}`;
  }
};

const getPlace = async function(id) {
  try {
    const place = await axios.get(`${DETAILS}place_id=${id}&key=${KEY}`);
    const data = await place.json();
    return data;
  } catch (error) {
    console.error(error);
    return `OOPS! Something went wrong. ERROR: ${error}`;
  }
};

const getPhotos = async function(photoreference) {
  try {
    const photos = await axios.get(`${PHOTO}&photoreference=${photoreference}&key=${KEY}`);
    const data = await photos.json();
    return data;
  } catch (error) {
    console.error(error);
    return `OOPS! Something went wrong. ERROR: ${error}`;
  }
};

export const dataService = {
  getPlaces,
  getPlace,
  getPhotos
}
