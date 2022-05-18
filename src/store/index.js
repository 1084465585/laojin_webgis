import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    _defaultMapView: '', //默认地图view
    _defaultMapTreeVisible: ''//控制maptree控件的显隐
}

const getters = {
    _getDefaultMapView() {
        return state._defaultMapView;
    },
    _getDefaultMapTreeVisible() {
        return state._defaultMapTreeVisible
    }
}
const mutations = {
    _setDefaultMapView(state, value) {
        state._defaultMapView = value;
    },
    _setDefaultMapTreeVisible(state, value) {
        state._defaultMapTreeVisible = value
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations
}

);

export default store;