import Vue from 'vue'
import Store from '../store/index'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Admin from '../components/Admin'
import Index from '../components/home/Index'
import Addblog from '../components/home/Addblog'
import ArticleList1 from '../components/home/Articlelist'
import Cooperation from '../components/home/Cooperation'
import Advertising from '../components/home/Advertising'
import Successfule from '../components/home/Successful'
import Login from '../components/home/Login'
import Register from '../components/home/Register'
import PasswordBack from '../components/home/PasswordBack'
import ArticleDetail from '../components/home/ArticleDetail'
// 后台系统
import Panel from '../components/admin/Panel'
import UserInfo from '../components/admin/UserInfo'
import User from '../components/admin/User'
import ArticleList from '../components/admin/ArticleList'
import AddArticle from '../components/admin/AddArticle'
import Discuss from '../components/admin/Discuss'
import Banner from '../components/admin/Banner'
import Images from '../components/admin/Images'

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
        redirect: '/articlelist1',
        children: [
          { path: '/articlelist1', component: ArticleList1 }
        ]
      },
      { path: '/addblog', component: Addblog, meta: { needLogin: true } },
      { path: '/cooperation', component: Cooperation },
      { path: '/ad', component: Advertising },
      { path: '/successful', component: Successfule },
      { path: '/login', component: Login },
      { path: '/register', component: Register },
      { path: '/password', component: PasswordBack },
      { path: '/articleDetail/:id', component: ArticleDetail }
    ]
  },
  {
    path: '/admin',
    component: Admin,
    meta: { needLogin: true },
    children: [
      {
        path: '/admin', redirect: '/panel'
      },
      {
        path: '/userinfo', component: UserInfo
      },
      {
        path: '/panel', component: Panel
      },
      {
        path: '/user', component: User
      },
      {
        path: '/articleList', component: ArticleList
      },
      {
        path: '/addArticle', component: AddArticle
      },
      {
        path: '/discussList', component: Discuss
      },
      {
        path: '/bannerList', component: Banner
      },
      {
        path: '/imagesList', component: Images
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  const isLogin = await Store.dispatch('validate_login')
  if (isLogin) {
    if (to.path === '/login') {
      next('/admin')
    } else {
      next()
    }
  } else {
    const flog = to.matched.some(item => item.meta.needLogin)
    if (flog) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
