import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/display.css';
import './assets/Css/base.css';

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => {
    console.log(App);
    return h(App)
  },
}).$mount('#app')
