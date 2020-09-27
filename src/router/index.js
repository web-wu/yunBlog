import Vue from 'vue'
import Store from '../store/index'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
const Home = () => import(/* webpackChunkName: "home" */ '../components/Home')

// import Index from '../components/home/Index'
const Index = () => import(/* webpackChunkName: "index_articleList_articleDetail" */ '../components/home/Index')
// import ArticleList1 from '../components/home/Articlelist'
const ArticleList1 = () => import(/* webpackChunkName: "index_articleList_articleDetail" */ '../components/home/Articlelist')
// import ArticleDetail from '../components/home/ArticleDetail'
const ArticleDetail = () => import(/* webpackChunkName: "index_articleList_articleDetail" */ '../components/home/ArticleDetail')

// import Addblog from '../components/home/Addblog'
const Addblog = () => import(/* webpackChunkName: "addBlog" */ '../components/home/Addblog')

// import Cooperation from '../components/home/Cooperation'
const Cooperation = () => import(/* webpackChunkName: "Ad_cooperation" */ '../components/home/Cooperation')
// import Advertising from '../components/home/Advertising'
const Advertising = () => import(/* webpackChunkName: "Ad_cooperation" */ '../components/home/Advertising')

// import Successfule from '../components/home/Successful'
const Successfule = () => import(/* webpackChunkName: "successful" */ '../components/home/Successful')

// import Login from '../components/home/Login'
const Login = () => import(/* webpackChunkName: "login_register_passwordback" */ '../components/home/Login')
// import Register from '../components/home/Register'
const Register = () => import(/* webpackChunkName: "login_register_passwordback" */ '../components/home/Register')
// import PasswordBack from '../components/home/PasswordBack'
const PasswordBack = () => import(/* webpackChunkName: "login_register_passwordback" */ '../components/home/PasswordBack')
// 后台系统
// import Admin from '../components/Admin'
const Admin = () => import(/* webpackChunkName: "admin" */ '../components/Admin')

// import Panel from '../components/admin/Panel'
const Panel = () => import(/* webpackChunkName: "panel" */ '../components/admin/Panel')

// import User from '../components/admin/User'
const User = () => import(/* webpackChunkName: "user_info" */ '../components/admin/User')
// import UserInfo from '../components/admin/UserInfo'
const UserInfo = () => import(/* webpackChunkName: "user_info" */ '../components/admin/UserInfo')

// import ArticleList from '../components/admin/ArticleList'
const ArticleList = () => import(/* webpackChunkName: "article_addArticle" */ '../components/admin/ArticleList')
// import AddArticle from '../components/admin/AddArticle'
const AddArticle = () => import(/* webpackChunkName: "article_addArticle" */ '../components/admin/AddArticle')

// import Discuss from '../components/admin/Discuss'
const Discuss = () => import(/* webpackChunkName: "comment" */ '../components/admin/Discuss')

// import Banner from '../components/admin/Banner'
const Banner = () => import(/* webpackChunkName: "banner" */ '../components/admin/Banner')

// import Images from '../components/admin/Images'
const Images = () => import(/* webpackChunkName: "img" */ '../components/admin/Images')

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
  const res = await Store.dispatch('validate_login')
  if (res.status === 1) {
    if (res.role === 'admin') {
      if (to.path === '/login') {
        next('/admin')
      } else {
        next()
      }
    } else {
      const isNormal = to.matched.some(item => item.path === '/admin')
      if (isNormal) {
        next('/')
      } else if (to.path === '/login') {
        next('/')
      }
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
