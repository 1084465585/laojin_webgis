<template>
  <div class="maptools-view">
    <span class="maptools-item" @click="handleMapToolsItemClick" id="xzqh">行政区划导航</span>
    <span class="maptools-item" @click="handleMapToolsItemClick" id="maptree">目录树管理</span>
    <span class="maptools-item" @click="handleMapToolsItemClick">距离测量</span>
    <span class="maptools-item" @click="handleMapToolsItemClick">面积测量</span>
    <span class="maptools-item" @click="handleMapToolsItemClick" id="clear">清屏</span>
  </div>
</template>

<script>
export default {
  name: 'MapTools',
  methods: {
    handleMapToolsItemClick(e) {
      console.log(e.target.id);
      switch (e.target.id) {
        case 'xzqh':
          this.openXZQHComponentPannel();
          break;
        case 'maptree':
          this.openMapTreePannel();
          break;
        case 'clear':
          break;
        default:
          break;
      }
    },
    openMapTreePannel() {
      let mapTreePannelVisible = this.$store.getters._getDefaultMapTreeVisible;
      console.log(mapTreePannelVisible);
      this.$store.commit('_setDefaultMapTreeVisible', !mapTreePannelVisible);
      console.log(this.$store.getters._getDefaultMapTreeVisible);
    },
    openXZQHComponentPannel() {
      let XZQHComponentPannel = this.$store.getters._getDefaultXZQHComponentVisible;
      this.$store.commit('_setDefaultXZQHComponentVisible', !XZQHComponentPannel);
    },
  },
};
</script>

<style>
.maptools-view {
  position: absolute;
  padding: 0 15px;
  height: 30px;
  top: 20px;
  right: 15px;
  background-color: aliceblue;
}
.maptools-item {
  line-height: 30px;
  margin-left: 15px;
  color: black;
  cursor: pointer;
}
.maptools-item:first-child {
  margin-left: 0;
}
</style>