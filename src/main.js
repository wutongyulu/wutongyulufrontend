import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import mavonEditor from 'mavon-editor'

import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/display.css';
import './assets/Css/base.css';
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(mavonEditor);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
