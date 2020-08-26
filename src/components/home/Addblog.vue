<template>
    <div id="containner">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>发表文章</el-breadcrumb-item>
        </el-breadcrumb>
        <el-alert title="默认设置内容的第一张图片为文章的缩略图" type="success" show-icon :closable="false" center></el-alert>
        <el-form ref="articleForm" :model="articleDate" label-position="top">
            <el-form-item label="标题:">
                <el-input v-model="articleDate.title" placeholder="请输入标题"></el-input>
            </el-form-item>
            <el-form-item label="作者:">
                <el-input v-model="articleDate.author" placeholder="请输入作者"></el-input>
            </el-form-item>
            <el-form-item label="标签:">
                <el-checkbox-group v-model="articleDate.tag">
                    <el-checkbox :label="v.label" border size="mini" v-for="(v, i) in tagList" :key="i"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="关键字:">
                <el-input v-model="articleDate.keyword" placeholder="请输入文章关键字"></el-input>
            </el-form-item>
            <el-form-item label="描述:">
                <el-input v-model="articleDate.describe" placeholder="请输入文章描述"></el-input>
            </el-form-item>
            <el-form-item label="内容:">
                <input type="text" hidden name="thumb" value="editorOption.thumb">
            </el-form-item>
            <el-button type="primary" @click="addArticle">确认添加</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      articleDate: {
        title: '',
        author: '',
        content: '',
        tag: [],
        status: '1',
        keyword: '',
        describe: '',
        thumb: ''
      },
      tagList: [
        { type: '', label: 'express' },
        { type: 'success', label: 'vue' },
        { type: 'warning', label: 'CSS' },
        { type: 'info', label: 'react' },
        { type: 'danger', label: 'nodejs' },
        { type: '', label: 'Jquery' },
        { type: 'warning', label: 'mongoDB' },
        { type: 'danger', label: '算法之美' },
        { type: 'success', label: 'mySQL' },
        { type: '', label: 'Javascript' },
        { type: 'info', label: '权限验证' },
        { type: 'warning', label: '项目部署' }
      ]
    }
  },
  methods: {
    async addArticle () {
      if (this.articleDate.content.length === 0) return this.$message.error('请输入文章内容!')
      const { data } = await this.$http.post('/admin/addArticle', this.articleDate)
      if (data.msg !== 200) return this.$messags.error('添加文章失败!')
      this.$message.success('添加文章成功!')
      this.$router.push('/articleList')
    }
  }
}
</script>

<style lang="less" scoped>
#containner{
    overflow: hidden;
    width: 11.979167rem;
    margin: 0 auto;
}
.el-breadcrumb{
    margin-bottom: 0.208333rem;
    margin-top: 0.208333rem;
}
.el-alert{
    margin-bottom: 0.15625rem;
}
button{
    margin-bottom: 0.520833rem;
}
#chatu_upload{
    display: none;
}
</style>
