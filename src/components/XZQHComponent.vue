<template>
  <div class="XZQHComponent-pannel" v-show="this.$store.getters._getDefaultXZQHComponentVisible">
    <div class="XZQHComponent-header">
      <span>行政区划导航</span>
      <i class="el-icon-close" @click="closeXZQHPannel"></i>
    </div>
    <div class="XZQH-select-pannel">
      <span class="XZQH-select-laber">省份：</span>
      <el-select
        v-model="provinceValue"
        @change="handleProvinceValueChang"
        size="mini"
        clearable
        placeholder="请选择省份"
      >
        <el-option v-for="item in provinceOptions" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="XZQH-content-pannel">
      <tbody>
        <tr v-for="item in cityAndCountyOptions" :key="item.label">
          <td style="min-width: 50px">
            <span class="city-item" :value="item.value" @click="handleItemClick(item.value, 'city')">
              {{ item.label }}
            </span>
          </td>
          <td>
            <span
              class="county-item"
              v-for="item2 in item.children"
              :key="item2.attributes.Name"
              :value="item2.attributes.Code"
              @click="handleItemClick(item2.attributes.Code, 'county')"
              >{{ item2.attributes.Name }}</span
            >
          </td>
        </tr>
      </tbody>
    </div>
  </div>
</template>

<script>
//引入需要使用到的ArcGIS API模块
import QueryTask from '@arcgis/core/tasks/QueryTask';
import Query from '@arcgis/core/tasks/support/Query';
export default {
  name: 'XZQHComponent',
  data() {
    return {
      provinceOptions: [],
      provinceValue: '',
    };
  },
  mounted: function () {
    this.getProvinceData();
  },
  methods: {
    //获取行政区划中的省份数据
    getProvinceData() {
      const queryTask = new QueryTask({
        //之前发布的省份的FeatureLayer服务的链接
        url: 'http://localhost:6080/arcgis/rest/services/test/MyMapService/FeatureServer/0',
      });
      let query = new Query();
      query.returnGeometry = true; //返回几何信息
      query.outFields = ['*']; //返回所有属性
      query.where = '1=1'; //SQL查询语句，范围所有查询到的值
      //Promise then 链式调用
      queryTask.execute(query).then((results) => {
        console.log(results);
        let currentData = [];
        if (results.features.length > 0) {
          results.features.map((item) => {
            currentData.push({
              value: item.attributes.Code,
              label: item.attributes.Name,
            });
          });
          this.provinceOptions = currentData;
        } else {
          this.$message({
            message: '暂时没有省份数据',
            type: 'warning',
          });
        }
      });
    },
    closeXZQHPannel() {
      let XZQHComponentPannel = this.$store.getters._getDefaultXZQHComponentVisible;
      this.$store.commit('_setDefaultXZQHComponentVisible', !XZQHComponentPannel);
    },
  },
};
</script>

<style>
.XZQHComponent-pannel {
  position: absolute;
  top: 90px;
  left: 80px;
  height: 500px;
  width: 300px;
  background-color: antiquewhite;
}
.XZQHComponent-header {
  width: 100%;
  height: 35px;
  border-bottom: 1px solid #e4e7ed;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.XZQHComponent-header > span {
  line-height: 35px;
  font-size: 16px;
  font-weight: 600;
}
.XZQHComponent-header > i {
  line-height: 35px;
  cursor: pointer;
}
.XZQH-select-pannel {
  width: 100%;
  height: 30px;
  padding: 0 5px;
  box-sizing: border-box;
  margin: 5px 0;
}
.XZQH-select-label {
  font-size: 13px;
}
</style>