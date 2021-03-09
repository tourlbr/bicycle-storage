<template>
  <div id="map"></div>
</template>

<script lang=ts>
import {
  computed, ComputedRef, onMounted,
} from '@vue/runtime-core';
import { useStore } from 'vuex';
import mapboxgl, { MapboxOptions } from 'mapbox-gl';
import { format } from 'date-fns';

import { BicycleParkingFacility } from '../Map.types';

export default {
  name: 'Map',
  setup() {
    // Get store
    const store = useStore();

    // Initialize map
    const initializeMap = () => {
      // Trigger store action to getBicycleParkingFacilities
      store.dispatch('getBicycleParkingFacilities');

      // Get bicycleParkingFacilities state from store
      const bicycleParkingFacilities: ComputedRef<BicycleParkingFacility[]> = computed(
        () => store.getters.allBicycleParkingFacilities,
      );

      // Custom mapboxgl Config
      const mapboxglConfig: MapboxOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [3.7250121, 51.0538286],
        zoom: 12,
        maxBounds: [
          [3.527330, 50.983421],
          [3.8901115, 51.1074791],
        ],
      };

      // Get access token from .env file and set it
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
      // Create new mapboxgl map with custom config
      const map = new mapboxgl.Map(mapboxglConfig);

      if (bicycleParkingFacilities.value) {
      // Add markers with GeoJSON
      // ========================
        bicycleParkingFacilities.value.forEach((bicycleParkingFacility: BicycleParkingFacility) => {
          const { fields, geometry } = bicycleParkingFacility;

          // Create popup with necessary data
          const popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
            <p><strong>Fietsenstalling ${fields.facilityname}</strong></p>
            <p>Last updated ${format(new Date(fields.time), 'HH:mm:ss')}</p>
            <div><div>Totaal aantal plaatsen: <strong>${fields.totalplaces}</strong> </div>
            <div>Beschikbare plaatsen: <strong>${fields.freeplaces}</strong></div></div>`);

          // make a marker for each feature and add to the map
          new mapboxgl.Marker()
            .setLngLat(geometry.coordinates as [number, number])
            .setPopup(popup)
            .addTo(map);
        });
      }
    };

    // Lifecycle hooks
    onMounted(() => {
      setInterval(initializeMap, 60000);
    });

    return {
      initializeMap,
    };
  },
};
</script>

<style scoped lang="scss">
  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  .mapboxgl-popup {
    max-width: 200px;
  }
</style>
