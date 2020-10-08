import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import toast from 'components/common/Toast'
import fastClick from 'fastclick'
Vue.config.productionTip = false
fastClick.attach(document.body)
//安装toast插件
Vue.use(toast)//会调用这个对象的install
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
