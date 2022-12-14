import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// element-ui引入
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios引入
import axios from 'axios'
Vue.use(ElementUI)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
