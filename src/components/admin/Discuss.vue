<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/panel' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>评论管理</el-breadcrumb-item>
            <el-breadcrumb-item>评论列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row :gutter="30">
            <el-col :span="6">
                <el-input v-model.trim="publicDate" placeholder="评论时间搜索" clearable @clear="getCommentList"></el-input>
            </el-col>
            <el-col :span="3">
                    <el-button type="primary" @click="searComment">查询</el-button>
            </el-col>
        </el-row>
        <el-table border stripe :data="discussData">
            <el-table-column type="index" width='50'></el-table-column>
            <el-table-column label="评论人" prop="username"></el-table-column>
            <el-table-column label="角色" prop="role">
            </el-table-column>
            <el-table-column label="评论时间" prop="createDate">
                <template slot-scope="scope">
                    {{scope.row.createDate | dateformat}}
                </template>
            </el-table-column>
            <el-table-column label="评论内容" prop="content"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" circle @click="discussDelete_btn(scope.row._id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :page-size="query.size" :current-page="query.page" :total="query.total" @current-change="currentChangeEvent"> </el-pagination>
    </div>
</template>

<script>
export default {
  data () {
    return {
      publicDate: null,
      discussData: [{
        username: 'wanger1',
        role: 'admin',
        createDate: '2020-6-22',
        content: 'slhahhklhkhkhkhkhkhkhkhkhkh'
      }],
      query: {
        page: 1,
        size: 8,
        total: null
      }
    }
  },
  created () {
    this.getCommentList()
  },
  methods: {
    async discussDelete_btn (id) {
      const confirmResult = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if (confirmResult !== 'confirm') return this.$message.info('已取消删除该条评论信息!')
      const { data } = await this.$http.delete('/admin/deleteComment/' + id)
      if (data.msg !== 200) return this.$message.error('删除评论失败!')
      this.$message.success('删除评论成功!')
      this.getCommentList()
    },
    async getCommentList () {
      const { data } = await this.$http.get('/admin/getCommentList?page=' + this.query.page)
      this.discussData = data.records
    },
    currentChangeEvent (newPage) {
      this.query.page = newPage
      this.getCommentList()
    },
    async searComment () {
      if (this.publicDate.length === 0) return this.$message.info('请输入搜索日期!')
      const { data } = await this.$http.post('/admin/searchComment', { dt: this.publicDate })
      this.discussData = data
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
