import Vue from 'vue'
import App from './App.vue'
// 引入ElementUI库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入路由router文件夹下的index.js路由器实例
import router from '../router'
// 引入store文件夹下的Vuex.Store实例
import store from '../store'
// 引入css样式
import './assets/less/index.less'
// 引入axios
import http from 'axios'
// 引入mock.js
import '../api/mock.js'


// 关闭生产提示
Vue.config.productionTip = false
// 使用ElementUI组件
Vue.use(ElementUI)


// 在vue原型上添加$http
Vue.prototype.$http = http

//路由守卫
router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name == 'login') {
    next({ name: 'home' })
  }
  else {
    next()
  }
})
new Vue({
  router, //将router路由挂载到Vue实例上
  store, //使用Vuex实例store，将store挂载到Vue实例上
  render: h => h(App),
  created() {
    store.commit('addMenu', router)
  }

}).$mount('#app')
