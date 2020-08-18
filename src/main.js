import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/plugin/element'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/globle.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
