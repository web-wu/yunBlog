<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/panel' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="block"><el-avatar :size="100" :src="avatarUrl"></el-avatar></div>
            <el-upload
              action="http://127.0.0.1/admin/uploadImg"
              name="img"
              :on-success="handleSuccess"
              list-type="picture"
            >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-col>
          <el-col :span="6">
            <ul>
              <li>用户昵称：<span>web-wu</span></li>
              <li>角色：<span>管理员</span></li>
              <li>密码：<span>wu136436</span></li>
              <li>状态：<span>正常</span></li>
              <li>邮箱：<span>15922202155@163.com</span></li>
              <li>创建时间：<span>2020-06-30</span></li>
            </ul>
          </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      avatarUrl: ''
    }
  },
  methods: {
    handleSuccess (response) {
      this.avatarUrl = response
    }
  }
}
</script>

<style lang="less" scoped>
.el-row{
  margin: 0.520833rem;
}
.el-button{
  margin: 0.09375rem;
}
ul{
  li{
    line-height: 0.3125rem;
    color: #01148c;
  }
}
</style>
