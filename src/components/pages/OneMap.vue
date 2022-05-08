
<template>
  <div class="onemap-page">
    <MapView />
    <MapTools />
  </div>
</template>

<script>
import MapView from './../common/MapView.vue';
import MapTools from './../MapTools.vue';
export default {
  name: 'OneMap',
  components: {
    MapView,
    MapTools,
  },
};
</script>

<style>
.onemap-page {
  height: 100%;
  width: 100%;
  background-color: cadetblue;
}
</style>