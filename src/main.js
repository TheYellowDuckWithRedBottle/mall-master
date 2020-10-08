import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import toast from 'components/common/Toast'
import fastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
Vue.config.productionTip = false
fastClick.attach(document.body)
//安装toast插件
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})
Vue.use(toast)//会调用这个对象的install
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
