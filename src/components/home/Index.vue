<template>
  <div class="container">
    <div class="content_left">
      <el-carousel trigger="click" height="2.083333rem">
        <el-carousel-item v-for="item in 5" :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <!-- 文章列表 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- 右边信息布局 -->
    <div class="content_right">
      <IdCard></IdCard>
      <Search :tags="tags" @tagsVal="handlTagEcent" @searcher="clickSearch"></Search>
      <Hotarticle></Hotarticle>
      <Ad></Ad>
      <FriendLink></FriendLink>
    </div>
  </div>
</template>

<script>
import IdCard from '../../components/home/IdCard'
import Search from '../../components/home/Search'
import Hotarticle from '../../components/home/Hotarticle'
import Ad from '../../components/home/Ad'
import FriendLink from '../../components/home/friendLink'
export default {
  data () {
    return {
      tags: [
        { type: '', label: 'express' },
        { type: 'success', label: 'vue' },
        { type: 'warning', label: 'CSS' },
        { type: 'info', label: 'react' },
        { type: 'danger', label: 'nodejs' },
        { type: '', label: 'Jquery' },
        { type: 'warning', label: 'mongoDB' },
        { type: 'danger', label: '算法之美' },
        { type: 'success', label: 'mySQL' },
        { type: '', label: 'JavaScript' },
        { type: 'info', label: '权限验证' },
        { type: 'warning', label: '项目部署' }
      ],
      tagVal: null,
      searchVal: null
    }
  },
  components: {
    IdCard,
    Search,
    Hotarticle,
    Ad,
    FriendLink
  },
  methods: {
    handlTagEcent (val) {
      this.tagVal = val
    },
    clickSearch (val) {
      this.searchVal = val
      console.log(val)
    }
  }
}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
@fontColor: #123456;
.container {
  display: flex;
  width: 11.979167rem;
  margin: 0 auto;
  padding: .520833rem 0;
  background-color: @bgColor;
  .content_left {
    width: 8.197917rem;
  }
  .content_right {
    width: 4.583333rem;
    margin-left: 0.3125rem;
  }
}
</style>
