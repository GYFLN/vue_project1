import Vue from 'vue'
import Router from 'vue-router'
import NavHeader from '@/components/NavHeader'
import Article from '@/components/Article'
import Active from '@/components/Active'

import Live from '@/components/Live'
import Column from '@/components/Column'
import Login from '@/components/Login'
import Search from '@/components/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'article',
      component:Article
    },
    {
      path: '*',
      name: 'article',
      component:Article
    },
    {
      path: '/article',
      name: 'article',
      component:Article
    },
    {
      path: '/active',
      name: 'active',
      component:Active
    }, 
    {
      path: '/live',
      name: 'live',
      component:Live
    },
    {
      path: '/column',
      name: 'column',
      component:Column
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
    {
      path: '/search',
      name: 'search',
      component:Search
    }
  ]
})
