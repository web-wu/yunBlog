<template>
  <div class="container1">
    <div class="search">
      <input type="text" v-model="searchVal" placeholder="search..." />
      <i class="iconfont iconsousuo" @click="hanndleSearch"></i>
    </div>
    <div class="notify">
      <div class="title">文章标签</div>
      <div class="content_n">
        <el-tag
          v-for="item in tags"
          :key="item.label"
          :type="item.type"
          effect="dark"
          size="mini"
          @click="handleTag(item.label)"
        >
        {{item.label}}
        </el-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: null
    }
  },
  props: ['tags'],
  methods: {
    handleTag (val) {
      this.$emit('tagsVal', val)
    },
    hanndleSearch () {
      if (!this.searchVal) return false
      this.$emit('searcher', this.searchVal)
    }
  }
}
</script>

<style lang="less" scoped>
@themoColor: #007cdc;
@bgColor: #019fde;
@fontColor: #123456;
@bg1Color: #008ddd;
.container1 {
  width: 100%;
  height: 2.083333rem;
  .search {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0.833333rem;
    margin-top: 0.520833rem;
    border: 1px solid @themoColor;
    border-radius: 0.104167rem;
    background-color: @bg1Color;
    input {
      width: 90%;
      height: 0.3125rem;
      color: @fontColor;
      outline: 0;
      padding: 0 0.104167rem;
      border: 1px solid @themoColor;
      border-radius: 0.104167rem;
      background-color: @themoColor;
    }
    i {
      position: absolute;
      top: 41%;
      right: 7%;
      font-size: 0.166667rem;
      &:hover{
        cursor: pointer;
      }
    }
  }
  .notify {
    width: 100%;
    height: 1.145833rem;
    margin-top: 0.104167rem;
    border: 1px solid @themoColor;
    border-radius: 0.104167rem;
    background-color: @bg1Color;
    overflow: hidden;
    .title {
      width: 100%;
      height: 0.333333rem;
      font-size: 0.208333rem;
      line-height: 0.333333rem;
      padding: 0 0.104167rem;
      border: 1px solid @themoColor;
      border-radius: 0.104167rem;
      background-color: @themoColor;
    }
    .content_n {
      padding: 0.03125rem 0.052083rem;
      display: flex;
      flex-wrap: wrap;
      .el-tag{
        margin: 0.020833rem;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
}
</style>
