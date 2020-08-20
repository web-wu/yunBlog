<template>
  <div>
    <div class="articleList" v-for="item in 8" :key="item">
    <div class="top">
      <div class="image">
        <img src="../../assets/images/avator.jpg" alt />
      </div>
      <div class="content">
        <h3>健康你看你看你看你看你看你看你看呢</h3>
        <p>了解了解了解了解了就来记录了解了解了解了解了就来记录了解了解了解了解了就来记录了解了解了解了解了就来记录了解了解了解了解了就来记录</p>
         <div id="tag">
           <el-tag
          v-for="item in 4"
          :key="item"
          :type="tag_type[0]"
          effect="dark"
          size="mini"
        >
        {{item}}
        </el-tag>
         </div>
      </div>
    </div>
    <div class="bottom">
      <div class="timer">
        <span>
          <i class="iconfont iconshijian"></i>2020-08-19
        </span>
        <span>
          <i class="iconfont iconzuozhe"></i>web-wu
        </span>
      </div>
      <div class="preview">
        <span>
          <i class="iconfont iconchakan-copy"></i>20
        </span>
        <span>
          <i class="iconfont icondianzan_active"></i>50
        </span>
        <span>
          <i class="iconfont iconpinglun"></i>52
        </span>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tag_type: {
        0: 'success',
        1: 'danger',
        2: 'warning',
        3: 'primary',
        4: 'info'
      }
    }
  }
}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
@fontColor: #123456;
@bg1Color: #008ddd;
.articleList {
  position: relative;
  width: 100%;
  height: 2.083333rem;
  padding: 0.208333rem;
  border: 1px solid @themoColor;
  border-radius: 0.104167rem;
  background-color: @bg1Color;
  margin-top: 0.520833rem;
  .top {
    display: flex;
    img {
      width: 1.5625rem;
    }
    .content {
      width: 100%;
      height: 1.458333rem;
      margin-left: 0.208333rem;
      &:hover{
        transform: scale(0.98);
        cursor: pointer;
      }
      h3 {
        font-size: 0.1875rem;
        margin-bottom: 0.104167rem;
        &:hover {
          cursor: pointer;
        }
      }
      p {
        font-size: 0.166667rem;
        word-break: break-all;
        text-indent: 2em;
      }
      #tag{
        display: flex;
        height: 0.208333rem;
        margin-top: 0.052083rem;
        .el-tag{
        margin: 0.03125rem;
      }
      }
    }
  }
  .bottom{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.333333rem;
    font-size: 0.166667rem;
    padding: 0 0.208333rem;
    border: 1px solid @themoColor;
    border-radius: 0.104167rem;
    background-color: @themoColor;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
      margin-left: 0.104167rem;
      &:first-of-type{
        margin: 0;
      }
      i{
        margin-right: 0.052083rem;
      }
    }
  }
}
</style>
