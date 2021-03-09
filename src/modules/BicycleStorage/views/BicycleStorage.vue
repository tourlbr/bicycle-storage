<template>
  <Map />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Map from '@/modules/BicycleStorage/components/Map/Map.vue';

@Options({
  components: {
    Map,
  },
})
export default class BicycleStorage extends Vue {}
</script>
