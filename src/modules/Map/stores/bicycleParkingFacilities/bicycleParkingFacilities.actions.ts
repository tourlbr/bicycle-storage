import axios from 'axios';

// to handle actions
export const actions = {
  getBicycleParkingFacilities({ commit }) {
    const datasetUrl = process.env.VUE_APP_DATASET_URL;
    const datasetUri = process.env.VUE_APP_DATASET_URI;

    const options = {
      params: {
        dataset: 'real-time-bezettingen-fietsenstallingen-gent',
        facet: 'facilityname',
      },
    };

    axios.get(`${datasetUrl}/${datasetUri}`, options)
      .then((response) => commit('SET_BICYCLE_PARKING_FACILITIES', response.data));
  },
};
