import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue')
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    component: () => import(/* webpackChunkName: "tasklist" */ '../views/TaskList.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/homemv',
    name: 'HomeMV',
    component: () => import(/* webpackChunkName: "homemv" */ '../views/HomeMV.vue')
  },
  {
    path: '/vendorlist',
    name: 'VendorList',
    component: () => import(/* webpackChunkName: "vendorlist" */ '../views/VendorList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
