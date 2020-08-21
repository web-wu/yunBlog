<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/panel' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row :gutter="30">
            <el-col :span="6">
                <el-input v-model="user" placeholder="用户名搜索" clearable @clear="getUserList"></el-input>
            </el-col>
            <el-col :span="3">
                    <el-button type="primary" @click="searchUser">查询</el-button>
            </el-col>
        </el-row>
        <el-table border stripe :data="userData">
            <el-table-column type="index" width='50'></el-table-column>
            <el-table-column label="用户名" prop="username"></el-table-column>
            <el-table-column label="角色" prop="role">
              <template slot-scope="scope">
                {{scope.row.role == 'admin' ? '管理员' : '普通用户'}}
              </template>
            </el-table-column>
            <el-table-column label="创建时间" prop="createDate">
              <template slot-scope="scope">
                {{scope.row.createDate | dateformat}}
              </template>
            </el-table-column>
            <el-table-column label="状态" prop="status">
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.status" active-color="#13ce66" inactive-color="#ff4949" @change="toggleStatus(scope.row)"></el-switch>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" icon="el-icon-edit" circle @click="userEdit_btn(scope.row)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="userDelete_btn(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="query.total" :current-page="query.page" :page-size="query.size" :pager-count="5" @current-change="currentChange" v-if="query.total > 8"></el-pagination>

        <!-- 用户编辑对话框 -->
        <el-dialog title="用户编辑" :visible.sync="userEdit" width="50%">
            <el-form label-width="80px" :model="userData_updata">
              <el-form-item label="用户名">
                <el-input v-model="userData_updata.username"></el-input>
              </el-form-item>
              <el-form-item label="角色">
                <el-select v-model="userData_updata.role" placeholder="请选择用户类型">
                    <el-option label="管理员" value="admin"></el-option>
                    <el-option label="普通用户" value="normal"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="userEdit = false">取 消</el-button>
                <el-button type="primary" @click="updataUser">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 删除对话框 -->
        <el-dialog title="删除用户" :visible.sync="userdelete" width="30%">
            <span>您确认要永久删除该用户吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="userdelete = false">取 消</el-button>
                <el-button type="primary" @click="deleteUser">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      userData: [],
      userData_updata: {},
      query: {
        page: 1,
        total: 10,
        size: 1
      },
      userEdit: false,
      userdelete: false
    }
  },
  created () {
    this.getUserList()
  },
  methods: {
    async toggleStatus (info) {
      const { data } = await this.$http.put('/admin/modifyUser/' + info._id, info)
      if (data.msg !== 200) {
        info.status = !info.status
        this.$message.error('用户状态修改失败！')
      }
      this.$message.success('用户状态修改成功！')
    },
    userEdit_btn (info) {
      this.userData_updata = info
      this.userEdit = true
    },
    async updataUser () {
      this.userEdit = false
      const { data } = await this.$http.put('/admin/modifyUser/' + this.userData_updata._id, this.userData_updata)
      if (data.msg !== 200) {
        this.$message.error('用户修改失败!')
      }
      this.$message.success('用户修改成功!')
    },
    userDelete_btn (info) {
      this.userData_updata = info
      this.userdelete = true
    },
    async deleteUser () {
      this.userdelete = false
      const { data } = await this.$http.delete('/admin/deleteUser/' + this.userData_updata._id)
      this.getUserList()
      if (data.msg !== 200) {
        this.$message.error('用户删除失败!')
      }
      this.$message.success('用户删除成功!')
    },
    async getUserList () {
      const { data } = await this.$http.get('/admin/getUserList?page=' + this.query.page)
      this.userData = data.records
      this.query.page = data.page
      this.query.total = data.total
      this.query.size = data.size
    },
    async currentChange (newPage) {
      this.query.page = newPage
      this.getUserList()
    },
    async searchUser () {
      const { data } = await this.$http.post('/admin/searchUser', { user: this.user })
      this.userData = data
    }
  }
}
</script>

<style lang="less" scoped>
.el-col{
    margin: 20px 0;
}
.el-table{
    border-radius: 5px;
    color: #01148c;
}
.el-pagination{
    margin-top: 20px;
}
</style>
