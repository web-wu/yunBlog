import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Admin from '../components/Admin'
import Index from '../components/home/Index'
import Addblog from '../components/home/Addblog'
import ArticleList from '../components/home/Articlelist'
import Cooperation from '../components/home/Cooperation'
import Advertising from '../components/home/Advertising'
import Successfule from '../components/home/Successful'
import Login from '../components/home/Login'
import Register from '../components/home/Register'
import PasswordBack from '../components/home/PasswordBack'

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
      { path: '/addblog', component: Addblog },
      { path: '/cooperation', component: Cooperation },
      { path: '/ad', component: Advertising },
      { path: '/successful', component: Successfule },
      { path: '/login', component: Login },
      { path: '/register', component: Register },
      { path: '/password', component: PasswordBack }
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
