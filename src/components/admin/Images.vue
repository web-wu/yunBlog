<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/panel' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>图片管理</el-breadcrumb-item>
            <el-breadcrumb-item>图片列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" @click="userEdit_btn">添加图片</el-button>
        <el-table border size="small" :data="imagesData">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column label="分类" prop="classify"></el-table-column>
            <el-table-column label="创建时间" prop="createDate">
                <template slot-scope="scope">
                    {{scope.row.createDate | dateformat}}
                </template>
            </el-table-column>
            <el-table-column label="图片地址" prop="img_url"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" circle @click="userDelete_btn(scope.row._id)"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 添加banner对话框 -->
        <el-dialog title="添加轮播图片" :visible.sync="userEdit" width="50%">
            <el-form :model="addImage" label-position="top">
                <el-form-item label="分类">
                    <el-select v-model="addImage.classify" placeholder="请选择活动区域">
                    <el-option label="广告投放" value="1"></el-option>
                    <el-option label="成功案例" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="图片">
                    <el-upload
                    action="http://127.0.0.1/admin/uploadImg"
                    :on-success="uploadImg"
                    list-type="picture" name="img">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    <input type="text" hidden value="addImage.img_url" name="img_url">
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="userEdit = false">取 消</el-button>
                <el-button type="primary" @click="bannerupload">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      imagesData: [{
        classify: '广告',
        img_url: '',
        createDate: '2020-6-22'
      }],
      addImage: {
        classify: '',
        img_url: ''
      },
      userEdit: false
    }
  },
  created () {
    this.getbannerList()
  },
  methods: {
    userEdit_btn () {
      this.userEdit = true
    },
    async userDelete_btn (id) {
      const confirmResult = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除!')
      }
      const { data } = await this.$http.delete('/admin/deleteBanner/' + id)
      if (data.msg !== 200) return this.$message.error('轮播图片删除失败!')
      this.$message.success('轮播图片删除成功!')
      this.getbannerList()
    },
    uploadImg (response) {
      this.addImage.img_url = response
    },
    async getbannerList () {
      const { data } = await this.$http.get('/admin/getBannerList')
      this.banners = data
    },
    async bannerupload () {
      this.userEdit = false
      const { data } = await this.$http.post('/admin/addBanner', this.addBanner)
      if (data.msg !== 200) return this.$message.error('添加轮播图片失败!')
      this.$message.success('添加轮播图片成功!')
      this.getbannerList()
    }
  }
}
</script>

<style lang="less" scoped>
.el-button{
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
