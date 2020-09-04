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
            <el-table-column label="分类" prop="classify">
              <template slot-scope="scope">
                  {{scope.row.classify === 1 ? '广告投放' : '成功案例'}}
              </template>
            </el-table-column>
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
                    <el-button type="danger" icon="el-icon-delete" circle @click="img_Delete_btn(scope.row._id)"></el-button>
                </template>
            </el-table-column>
        </el-table>
         <el-pagination background layout="prev, pager, next" :current-page="query.page" :page-size="query.size" :total="query.total" @current-change="pageChange"></el-pagination>

        <!-- 添加banner对话框 -->
        <el-dialog title="添加图片" :visible.sync="userEdit" width="50%">
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
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="userEdit = false">取 消</el-button>
                <el-button type="primary" @click="add_img_ad_case">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      imagesData: [],
      addImage: {
        classify: '',
        img_url: ''
      },
      query: {
        page: 1,
        size: 5,
        total: null
      },
      userEdit: false
    }
  },
  created () {
    this.get_ad_case_img()
  },
  methods: {
    userEdit_btn () {
      this.userEdit = true
    },
    async img_Delete_btn (id) {
      const confirmResult = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除!')
      }
      const { data } = await this.$http.delete('/admin/delete_ad_case_img/' + id)
      if (data.status !== 1) return this.$message.error('图片删除失败!')
      this.$message.success('图片删除成功!')
      this.get_ad_case_img()
    },
    uploadImg (response) {
      this.addImage.img_url = 'http://localhost/' + response
    },
    async get_ad_case_img () {
      const { data } = await this.$http.get('/admin/get_ad_case_img?page=' + this.query.page)
      this.imagesData = data.records
      this.query.page = data.page
      this.query.size = data.size
      this.query.total = data.total
    },
    async add_img_ad_case () {
      this.userEdit = false
      const { data } = await this.$http.post('/admin/add_AD_Case_img', this.addImage)
      if (data.status !== 1) return this.$message.error('添加图片失败!')
      this.$message.success('添加轮片成功!')
      this.get_ad_case_img()
    },
    pageChange (newPage) {
      this.query.page = newPage
      this.get_ad_case_img()
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
