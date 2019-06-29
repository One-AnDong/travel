import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Citiy from '@/pages/citiy/Citiy'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/citiy',
    name: 'Citiy',
    component: Citiy
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail') // 异步加载
  }],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
