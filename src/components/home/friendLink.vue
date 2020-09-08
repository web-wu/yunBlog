<template>
  <div class="friendLink">
    <div class="friendLink_title">友情链接</div>
    <div class="link">
      <ul>
        <li><a href="#">huoer_ic</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
@fontColor: #123456;
@bg1Color: #008ddd;
.friendLink{
  width: 100%;
  height: 1.041667rem;
  border: 1px solid @themoColor;
  border-radius: 0.104167rem;
  background-color: @bg1Color;
  margin-top: 0.520833rem;
  .friendLink_title{
    height: 0.333333rem;
    font-size: 0.208333rem;
    padding: 0 0.104167rem;
    line-height: 0.333333rem;
    border-radius: 0.104167rem;
    background-color: @themoColor;
  }
  .link{
    font-size: 0.166667rem;
    padding: 0.104167rem 0.208333rem;
    a{
      &:hover{
        color: cyan;
      }
    }
  }
}
</style>
