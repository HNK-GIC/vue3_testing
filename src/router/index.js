import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import ExportView from '../views/ExpView.vue'
import ImportView from '../views/ImpView.vue'
import PdfView from '../views/PdfView.vue'
import PhotoView from '../views/PhotoView.vue'
import XLSXView from '../views/XLSXView.vue'
import DataTableView from '../views/DataTableView.vue'

const routes = [
  {
    path: '/dt',
    name: 'dtview',
    component: DataTableView
  },
  {
    path: '/xlsx',
    name: 'xlsxview',
    component: XLSXView
  },
  {
    path: '/photo',
    name: 'photoview',
    component: PhotoView
  },
  {
    path: '/pdf',
    name: 'pdfview',
    component: PdfView
  },
  {
    path: '/import',
    name: 'importview',
    component: ImportView
  },
  {
    path: '/export',
    name: 'exportview',
    component: ExportView
  },
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
