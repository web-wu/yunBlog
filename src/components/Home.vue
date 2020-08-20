<template>
  <div class="containner">
    <header>
      <img src="../assets/images/logo.png" alt="">
      <Navigator :nav="nav" :signIn="signIn" class="nav"></Navigator>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      云博客 | 备案号 123698-7
    </footer>
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
              path: '/cooperation'
            },
            {
              id: 1,
              title: '广告投放',
              path: '/ad'
            }
          ]
        },
        {
          id: 3,
          title: '成功案例',
          path: '/successful'
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
.containner{
  width: 100%;
  height: 100%;
  header{
    height: .625rem;
    padding: 0 3.447917rem;
    font-size: .208333rem;
    background-color: @themoColor;
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
  main{
    width: 100%;
    background-color: @bgColor;
  }
  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0.416667rem;
    font-size: 0.166667rem;
    background-color: @themoColor;
  }
}
</style>
