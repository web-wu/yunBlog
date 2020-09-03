<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/panel' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>轮播管理</el-breadcrumb-item>
            <el-breadcrumb-item>banner列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" @click="userEdit_btn">添加图片</el-button>
        <el-table border size="small" :data="banners">
            <el-table-column label="图片id" prop="id"  width="100"></el-table-column>
            <el-table-column label="创建时间" prop="createDate">
                <template slot-scope="scope">
                    {{scope.row.createDate | dateformat}}
                </template>
            </el-table-column>
            <el-table-column label="图片" prop="img_url">
                <template slot-scope="scope">
                    <div class="block">
                        <el-image :src="scope.row.img_url">
                        <div slot="placeholder" class="image-slot">
                            加载中<span class="dot">...</span>
                        </div>
                        </el-image>
                    </div>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="danger" icon="el-icon-delete" circle @click="userDelete_btn(scope.row._id)"></el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 添加banner对话框 -->
        <el-dialog title="添加轮播图片" :visible.sync="userEdit" width="50%">
            <el-alert title="图片id必须勾选且不能重复，若要修改图片需先删除再上传新的图片" type="warning" center show-icon></el-alert>
            <el-form :model="addBanner" label-position="top">
                 <el-form-item label="id">
                    <el-radio v-model="addBanner.id" label="1">1</el-radio>
                    <el-radio v-model="addBanner.id" label="2">2</el-radio>
                    <el-radio v-model="addBanner.id" label="3">3</el-radio>
                    <el-radio v-model="addBanner.id" label="4">4</el-radio>
                    <el-radio v-model="addBanner.id" label="5">5</el-radio>
                </el-form-item>
                <el-form-item label="banner图片">
                    <el-upload
                    action="http://127.0.0.1/admin/uploadImg"
                    :on-success="uploadImg"
                    list-type="picture" name="img">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    <input type="text" hidden value="addBanner.img_url" name="img_url">
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="userEdit = false">取 消</el-button>
                <el-button type="primary" @click="bannerupload">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 删除对话框 -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      banners: [],
      addBanner: {
        id: '',
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
      this.addBanner.img_url = 'http://localhost/' + response
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
    margin: 0.208333rem 0;
}
.el-table{
    border-radius: 0.052083rem;
    color: #01148c;
}
.el-pagination{
    margin-top: 0.208333rem;
}
.el-image{
  max-width: 1.041667rem;
}
</style>
