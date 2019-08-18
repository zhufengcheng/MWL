import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n'
import EventBus from './assets/js/eventBus'
import './assets/css/public.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from './axios/axios'
import moment from 'moment'
Vue.filter('dateFormat', function (input, formatstring) {
  return moment(input).format(formatstring)
})
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(iView);
Vue.use(VueI18n) // 通过插件的形式挂载
Vue.use(ElementUI);
const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./vueI18n/zh'),   // 中文语言包
    'en-US': require('./vueI18n/en')    // 英文语言包
  }
})
Vue.prototype.$CRJ = new Vue();
Vue.prototype.$bus = EventBus;
Vue.prototype.$http = axios
new Vue({
  i18n,
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
