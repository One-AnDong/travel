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
  }]
})
