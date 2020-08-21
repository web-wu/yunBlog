<template>
  <el-container>
    <el-header>
      <div id="logo">
        <img src="../../assets/images/logo.png" alt />
      </div>
      <ul>
        <li>
          <i class="iconfont iconwangzhanshouye"></i>
          <router-link to="/">网站首页</router-link>
        </li>
        <li>
          <img src="../../assets/images/login.png" alt />
          <span>{{user.username}}</span>
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
  mounted () {
    this.user.username = this.$cookie.getCookie('username')
    this.user.emailpassword = this.$cookie.getCookie('emailpassword')
    this.user.password = this.$cookie.getCookie('password')
    this.user.role = this.$cookie.getCookie('role')
    this.user.status = this.$cookie.getCookie('status')
    this.user.createDate = this.$cookie.getCookie('createDate')
    this.user.avatar = this.$cookie.getCookie('avatar')
  },
  methods: {
    async getMune () {
      const { data } = await this.$http.get('/admin/getMune')
      this.muneList = data
    },
    handleLogout () {
      this.$cookie.clearCookie('conncetId')
      this.$cookie.clearCookie('email')
      this.$cookie.clearCookie('password')
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
  #logo {
    img {
      height: 50px;
    }
  }
  ul {
    li {
      position: relative;
      float: left;
      width: 100px;
      height: 60px;
      text-align: center;
      line-height: 60px;
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
          left: 22px;
          bottom: -15px;
          font-size: 14px;
        }
        ol {
          display: none;
          position: absolute;
          z-index: 1000;
          padding: 10px 0;
          background-color: #007cdc;
          > li {
            height: 30px;
            text-align: center;
            line-height: 30px;
            &:hover {
              background-color: #01148c;
            }
          }
        }
      }
    }
  }
}
.el-menu{
  border-right: 1px solid #409EFF;
  i{
    color: #01148c;
  }
}
i{
  margin-right: 5px;
}
</style>
