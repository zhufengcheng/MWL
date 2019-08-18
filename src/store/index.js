import Vue from 'vue'
import Vuex from 'vuex'
import vuexDomeStore from './modules/vuexDomeStore'
import vuexStreamline from './modules/vuexStreamline'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        vuexDomeStore: vuexDomeStore,
        vuexStreamline:vuexStreamline
    }
})
export default store
