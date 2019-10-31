import Vue from 'vue'
import VueRouter from 'vue-router'
import AppLayout from '@/layout'
import AuthRequired from '@/middleware/AuthRequired'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: AppLayout,
    beforeEnter: AuthRequired,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ './views/Dashboard')
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import(/* webpackChunkName: "blog" */ './views/Blog')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ './views/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
