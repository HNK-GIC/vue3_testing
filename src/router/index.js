import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import ExcelImportView from '../views/ExcelImportView.vue'
const routes = [
  {
    path: '/',
    name: 'listview',
    component: ListView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  {
    path: '/import',
    name: 'import',
    component: ExcelImportView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
