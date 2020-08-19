import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Admin from '../components/Admin'
import Index from '../components/home/Index'
import Addblog from '../components/home/Addblog'
import ArticleList from '../components/home/Articlelist'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/', redirect: '/index' },
      {
        path: '/index',
        component: Index,
        redirect: '/articlelist',
        children: [
          { path: '/articlelist', component: ArticleList }
        ]
      },
      { path: '/addblog', component: Addblog }
    ]
  },
  {
    path: '/admin', component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
