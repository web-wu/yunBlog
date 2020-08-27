<template>
  <div id="articleDetail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>文章列表</el-breadcrumb-item>
      <el-breadcrumb-item>文章详情</el-breadcrumb-item>
    </el-breadcrumb>
    <article>ffff</article>
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
#articleDetail{
  width: 11.979167rem;
  margin: 0 auto;
}
.el-breadcrumb{
  padding: 0.208333rem 0;
}
</style>
