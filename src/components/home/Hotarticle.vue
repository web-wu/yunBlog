<template>
  <div class="hotarticle">
    <div class="articleTitile">热门文章</div>
    <div class="list_article">
      <ul>
        <li v-for="(item, index) in hotArticle" :key="index">
          <span @click="goToDetail(item._id)">{{item.title.substr(0,15)}}</span><span>{{item.publicDate | dtformat()}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hotArticle'],
  methods: {
    goToDetail (id) {
      this.$router.push(`/articleDetail/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
@fontColor: #123456;
@bg1Color: #008ddd;
.hotarticle{
  width: 100%;
  height: 3.385417rem;
  margin-top: 0.520833rem;
  border: 1px solid @themoColor;
  border-radius: 0.104167rem;
  background-color: @bg1Color;
  overflow: hidden;
  .articleTitile{
    height: 0.333333rem;
    font-size: 0.208333rem;
    padding: 0 0.104167rem;
    line-height: 0.333333rem;
    border-radius: 0.104167rem;
    background-color: @themoColor;
  }
  .list_article{
    ul{
      padding: 0.104167rem 0.208333rem;
      li{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        span{
          font-size: 0.166667rem;
            &:hover{
              transform: scale(1.1);
              cursor: pointer;
              color: aqua;
            }
        }
      }
    }
  }
}
</style>
