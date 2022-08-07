import Vue from 'vue'
import App from './App.vue'
import JsmpegPlayer from './index'
import VueRouter from 'vue-router'    //引入路由
import router from './router'  // 引入刚刚自己配置的路由信息
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(JsmpegPlayer)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router
}).$mount('#app')
