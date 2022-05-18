
<template>
  <div class="onemap-page">
    <MapView />
    <MapTools />
    <MapTree />
  </div>
</template>

<script>
import MapView from './../common/MapView.vue';
import MapTools from './../MapTools.vue';
import MapTree from './../MapTree.vue';
export default {
  name: 'OneMap',
  components: {
    MapView,
    MapTools,
    MapTree,
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