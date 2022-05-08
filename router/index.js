import Vue from "vue"
// 引入VueRouter插件
import VueRouter from "vue-router"

// import Router from 'vue-router'



// 使用插件
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
// 修改 原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 路由规则
const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    redirect: '/home',
    children: [
      // {
      //   path: '/home',
      //   name: 'home',
      //   component: () => import('../views/Home/index.vue')
      // },
      // {
      //   path: '/user',
      //   name: 'user',
      //   component: () => import('../views/User/index.vue')
      // },
      // {
      //   path: '/mall',
      //   name: 'mall',
      //   component: () => import('../views/Mall/index.vue')
      // },
      // {
      //   path: '/page1',
      //   name: 'page1',
      //   component: () => import('../views/other/pageOne.vue')
      // },
      // {
      //   path: '/page2',
      //   name: 'page2',
      //   component: () => import('../views/other/pageTwo.vue')
      // },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/login.vue')
  }
]
// 创建一个路由实例
const router = new VueRouter({
  mode: 'history',
  routes
})
// 将路由实例暴露出去
export default router