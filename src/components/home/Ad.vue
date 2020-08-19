<template>
  <div class="ad">
    <div class="ad_Titile">广告推介</div>
    <div class="ad_content">
      <img src="" alt="">
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
.ad{
  width: 100%;
  height: 2.864583rem;
  margin-top: 0.520833rem;
  border: 1px solid @themoColor;
  border-radius: 0.104167rem;
  background-color: @bg1Color;
  .ad_Titile{
    height: 0.333333rem;
    font-size: 0.208333rem;
    padding: 0 0.104167rem;
    line-height: 0.333333rem;
    border-radius: 0.104167rem;
    background-color: @themoColor;
  }
  .ad_content{
  }
}
</style>
