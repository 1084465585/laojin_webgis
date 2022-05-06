
<template>
  <div class="onemap-page">
    <MapView />
  </div>
</template>

<script>
import MapView from './../common/MapView.vue';
export default {
  name: 'OneMap',
  components: {
    MapView,
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