import { OccupancyBicycleParkingFacilities } from '@/modules/Map/Map.types';

// to handle mutations
export const mutations = {
  SET_BICYCLE_PARKING_FACILITIES(
    state,
    data: OccupancyBicycleParkingFacilities,
  ) {
    state.bicycleParkingFacilities = data.records;
  },
};
