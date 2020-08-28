<template>
  <el-container>
    <el-header>
      <div id="logo">
        <img src="../assets/images/logo.png" alt />
      </div>
      <ul>
        <li>
          <i class="iconfont iconwangzhanshouye"></i>
          <router-link to="/">网站首页</router-link>
        </li>
        <li>
          <img src="../assets/images/login.png" alt />
          <span>{{$store.state.username}}</span>
          <ol>
            <li>
              <router-link to="/userinfo">个人中心</router-link>
            </li>
            <li>
              <a href="javascript:;" @click="handleLogout">退出</a>
            </li>
          </ol>
        </li>
      </ul>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu background-color="#409EFF" text-color="#01148c" active-text-color="#ffd04b" unique-opened router>
        <!-- 一级菜单 -->
          <el-submenu :index="item.id" v-for="item in muneList" :key="item.id">
            <template slot="title">
              <i :class="icconObj[item.id]"></i>
              <span>{{item.title}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="subItem.path" v-for="subItem in item.secondTitle" :key="subItem.id">
              <template>
                <i class="el-icon-menu"></i>
                <span>{{subItem.title}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      muneList: [],
      icconObj: {
        101: 'iconfont iconzuozhe',
        102: 'iconfont iconwenzhang1',
        103: 'iconfont iconpinglun1',
        104: 'iconfont iconlunbo',
        105: 'iconfont icongithup'
      }
    }
  },
  created () {
    this.getMune()
  },
  methods: {
    async getMune () {
      const { data } = await this.$http.get('/admin/getMune')
      this.muneList = data
    },
    handleLogout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.el-main {
  background-color: #9cc1e4;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #01148c;
  background-color: #007cdc;
  #logo {
    img {
      height: 0.520833rem;
    }
  }
  ul {
    li {
      position: relative;
      float: left;
      width: 1.041667rem;
      height: 0.625rem;
      text-align: center;
      line-height: 0.625rem;
      &:hover > a {
        color: aqua;
      }
      &:nth-of-type(2) {
        &:hover ol {
          display: block;
        }
        img {
          margin: 0 auto;
        }
        span {
          position: absolute;
          left: 0.229167rem;
          bottom: -0.15625rem;
          font-size: 0.145833rem;
        }
        ol {
          display: none;
          position: absolute;
          z-index: 1000;
          padding: 0.104167rem 0;
          background-color: #007cdc;
          > li {
            height: 0.3125rem;
            text-align: center;
            line-height: 0.3125rem;
            &:hover {
              background-color: #01148c;
            }
          }
        }
      }
    }
  }
}
.el-aside{
  background-color: #007cdc;
  min-height: 8.25rem
}
.el-menu{
  border-right: 1px solid #409EFF;
  i{
    color: #01148c;
  }
}
i{
  margin-right: 0.052083rem;
}
</style>
