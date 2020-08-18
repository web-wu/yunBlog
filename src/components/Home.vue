<template>
  <div class="containner">
    <header>
      <img src="../assets/images/logo.png" alt="">
      <Navigator :nav="nav" :signIn="signIn" class="nav"></Navigator>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navigator from '../components/home/Navigator'
export default {
  data () {
    return {
      nav: [
        {
          id: 0,
          title: '首页',
          path: '/'
        },
        {
          id: 1,
          title: '写博客',
          path: '/addblog'
        },
        {
          id: 2,
          title: '合作',
          children: [
            {
              id: 0,
              title: '业务合作',
              path: ''
            },
            {
              id: 1,
              title: '广告投放',
              path: ''
            }
          ]
        },
        {
          id: 3,
          title: '成功案例',
          path: ''
        }
      ],
      signIn: [
        {
          id: 0,
          title: '登录',
          path: '/login'
        },
        {
          id: 1,
          title: '注册',
          path: '/register'
        },
        {
          id: 2,
          title: '找回密码',
          path: '/password'
        }
      ]
    }
  },
  components: {
    Navigator
  }
}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
@fontColor: #123456;
.containner{
  width: 100%;
  height: 100%;
  header{
    height: .625rem;
    padding: 0 3.447917rem;
    font-size: .208333rem;
    background-color: @themoColor;
    color: @fontColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      width: auto;
      height: .520833rem;
    }
    .nav{
      width: 5.208333rem;
    }
  }
}
</style>
