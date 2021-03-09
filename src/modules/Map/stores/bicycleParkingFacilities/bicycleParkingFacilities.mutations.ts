import { OccupancyBicycleParkingFacilities } from '@/modules/Map/Map.types';

// to handle mutations
export const mutations = {
  // eslint-disable-next-line no-shadow
  SET_BICYCLE_PARKING_FACILITIES(
    state,
    data: OccupancyBicycleParkingFacilities,
  ) {
    state.bicycleParkingFacilities = data.records;
  },
};
