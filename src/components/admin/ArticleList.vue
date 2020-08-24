<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/panel' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章管理</el-breadcrumb-item>
        <el-breadcrumb-item>文章列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row :gutter="30">
            <el-col :span="6">
                <el-input v-model.trim="search_article" placeholder="文章搜索" clearable @clear="getArticleList"></el-input>
            </el-col>
            <el-col :span="8">
                <el-button type="primary" @click="searchArticle_btn">搜索</el-button>
                <el-button type="success" @click="addArticle_btn">添加文章</el-button>
            </el-col>
        </el-row>
         <el-table border stripe :data="articleData">
            <el-table-column type="index" width='50'></el-table-column>
            <el-table-column label="标题" prop="title"></el-table-column>
            <el-table-column label="作者" prop="author"></el-table-column>
            <el-table-column label="时间" prop="publicDate">
                <template slot-scope="scope">
                  {{scope.row.publicDate | dateformat}}
                </template>
            </el-table-column>
            <el-table-column label="状态" prop="status">
                <template slot-scope="scope">
                  {{scope.row.status == '1' ? '已发布' : '未发布'}}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" circle @click="articleEdit_btn(scope.row)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="articleDelete_btn(scope.row._id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :current-page="query.page" :page-size="query.size" :total="query.total" @current-change="pageChange"></el-pagination>

        <!-- 文章编辑对话框 -->
        <el-dialog title="文章编辑" :visible.sync="articleshow" width="50%">
            <el-form ref="articleFormModify" :model="articleDate_modify" label-position="top">
                <el-form-item label="标题:">
                    <el-input v-model="articleDate_modify.title" placeholder="请输入标题"></el-input>
                </el-form-item>
                <el-form-item label="作者:">
                    <el-input v-model="articleDate_modify.author" placeholder="请输入作者"></el-input>
                </el-form-item>
                <el-form-item label="标签:">
                    <el-checkbox-group v-model="articleDate_modify.tag">
                        <el-checkbox label="HTML" border size="mini"></el-checkbox>
                        <el-checkbox label="CSS" border size="mini"></el-checkbox>
                        <el-checkbox label="javascript" border size="mini"></el-checkbox>
                        <el-checkbox label="jQuery" border size="mini"></el-checkbox>
                        <el-checkbox label="ajax" border size="mini"></el-checkbox>
                        <el-checkbox label="nodejs" border size="mini"></el-checkbox>
                        <el-checkbox label="vue" border size="mini"></el-checkbox>
                        <el-checkbox label="react" border size="mini"></el-checkbox>
                        <el-checkbox label="uniapp" border size="mini"></el-checkbox>
                        <el-checkbox label="mongoDB" border size="mini"></el-checkbox>
                        <el-checkbox label="mySql" border size="mini"></el-checkbox>
                        <el-checkbox label="登录/注册" border size="mini"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="关键字:">
                    <el-input v-model="articleDate_modify.keyword" placeholder="请输入文章关键字"></el-input>
                </el-form-item>
                <el-form-item label="描述:">
                    <el-input v-model="articleDate_modify.describe" placeholder="请输入文章描述"></el-input>
                </el-form-item>
                <el-form-item label="内容:">
                    <quill-editor name="modifyEditor" ref="myQuillEditor" v-model="articleDate_modify.content" :options="editorOption"></quill-editor>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="articleshow = false">取 消</el-button>
                <el-button type="primary" @click="modify_btn">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      search_article: '',
      articleshow: false,
      editorOption: {},
      articleData: [],
      query: {
        page: 1,
        size: 5,
        total: null
      },
      articleDate_modify: {
        title: '',
        author: '',
        content: '',
        tag: [],
        status: '1',
        keyword: '',
        describe: '',
        thumb: ''
      }
    }
  },
  created () {
    this.getArticleList()
  },
  methods: {
    articleEdit_btn (info) {
      this.articleDate_modify = info
      this.articleshow = true
    },
    async modify_btn () {
      this.articleshow = false
      const { data } = await this.$http.put('/admin/modifyArticle/' + this.articleDate_modify._id, this.articleDate_modify)
      if (data.msg !== 200) return this.$message.error('修改文章失败!')
      this.$message.success('修改文章成功!')
      this.getArticleList()
    },
    async articleDelete_btn (id) {
      const confirmResult = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if (confirmResult !== 'confirm') return this.$message.info('已取消删除文章!')
      const { data } = await this.$http.delete('/admin/deleteArticle/' + id)
      if (data.msg !== 200) return this.$message.error('删除文章失败!')
      this.$message.success('删除文章成功!')
      this.getArticleList()
    },
    async searchArticle_btn () {
      if (this.search_article.length === 0) return this.$message.info('请输入文章标题再搜索!')
      const { data } = await this.$http.post('/admin/searchArticle', { search_info: this.search_article })
      this.articleData = data
    },
    addArticle_btn () {
      this.$router.push('/addArticle')
    },
    async getArticleList () {
      const { data } = await this.$http.get('/admin/getArticleList?page=' + this.query.page)
      this.articleData = data.records
      this.query.page = data.page
      this.query.size = data.size
      this.query.total = data.total
    },
    pageChange (newPage) {
      this.query.page = newPage
      this.getArticleList()
    }
  }
}
</script>

<style lang="less" scoped>
.el-col{
    margin: 0.208333rem 0;
}
.el-table{
    border-radius: 0.052083rem;
    color: #01148c;
}
.el-pagination{
    margin-top: 0.208333rem;
}
</style>
