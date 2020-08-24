import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
// import './assets/plugin/element'
import './assets/plugin/ele'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/globle.css'
import './assets/iconfont/iconfont.css'
import echarts from 'echarts'

Axios.defaults.baseURL = 'http://127.0.0.1'
Axios.defaults.withCredentials = true
Axios.interceptors.request.use(config => {
  return config
})
Axios.interceptors.response.use(config => {
  return config
})
Vue.prototype.$http = Axios
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.filter('dateformat', function (val) {
  var dt = new Date(val)
  var y = dt.getFullYear()
  var m = dt.getMonth() + 1
  var d = dt.getDate()
  var hh = dt.getHours()
  var mm = dt.getMinutes()
  var ss = dt.getSeconds()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  hh = hh < 10 ? '0' + hh : hh
  mm = mm < 10 ? '0' + mm : mm
  ss = ss < 10 ? '0' + ss : ss
  return y + '-' + m + '-' + d + '    ' + hh + ':' + mm + ':' + ss
})
Vue.filter('dtformat', function (val) {
  var dt = new Date(val)
  var y = dt.getFullYear()
  var m = dt.getMonth() + 1
  var d = dt.getDate()
  m = m < 10 ? '0' + m : m
  d = d < 10 ? '0' + d : d
  return y + '-' + m + '-' + d
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
