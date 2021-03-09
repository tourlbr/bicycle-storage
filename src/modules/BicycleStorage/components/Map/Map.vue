<template>
  <div id="map"></div>
</template>

<script lang=ts>
import { onMounted } from '@vue/runtime-core';
import mapboxgl, { MapboxOptions } from 'mapbox-gl';

export default {
  name: 'Map',
  setup() {
    // Initialize map
    const initializeMap = () => {
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

      // Add markers with GeoJSON
      // ========================
      // @TODO:get data from Vuex store
      const geojson = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [3.7167481, 51.0366828],
          },
          properties: {
            title: 'Mapbox',
            description: 'Citadelpark',
          },
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [3.7309775, 51.067544],
          },
          properties: {
            title: 'Mapbox',
            description: 'Dok Noord',
          },
        }],
      };
      // make a marker for each feature and add to the map
      geojson.features.forEach((marker) => {
        // create the popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(
          'Construction on the Washington Monument began in 1848.',
        );
        new mapboxgl.Marker()
          .setLngLat(marker.geometry.coordinates)
          .setPopup(popup)
          .addTo(map);
      });
    };

    onMounted(initializeMap);

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
