import Vue from 'vue'
import Vuex from 'vuex'
// 引入tab数据模块
import tab from './tab'
// 引入user数据模块
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab,
    user
  }
})

