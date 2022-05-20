import Vue from 'vue'
import VueRouter from 'vue-router'
import AxiTest from '../views/AxiTest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/axi',
    name: 'axiTest',
    component: AxiTest
  },
  {
    path: '/createData',
    name: 'Create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
