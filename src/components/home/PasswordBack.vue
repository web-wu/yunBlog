<template>
   <div class="password_com">
      <div id="login_box">
      <h4>找回密码</h4>
        <el-form :model="loginForm" :rules="vaildRule" ref="login_form">
          <el-form-item prop="email">
            <el-input placeholder="请输入邮箱" v-model.trim="loginForm.email"></el-input>
          </el-form-item>
          <el-form-item prop="username">
            <el-input placeholder="请输入用户名" v-model.trim="loginForm.username"></el-input>
          </el-form-item>
          <div class="btn">
            <el-button type="success" @click.prevent="signIn">提交</el-button>
          <el-button type="info" @click.prevent="resetData">重置</el-button>
          </div>
        </el-form>
      </div>
   </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        email: '',
        username: ''
      },
      vaildRule: {
        email: [
          { type: 'email', required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    signIn () {
      this.$refs.login_form.validate(valid => {
        if (!valid) {
          this.$message({
            message: '邮箱或用户名错误！',
            type: 'error'
          })
          return false
        }
        // 再次发送axios请求
        this.$message({
          message: '发送成功！,请注意查收邮箱。',
          type: 'success'
        })
        setTimeout(function () {
          this.$router.push('/')
        }, 5000)
      })
    },
    resetData () {
      this.$refs.login_form.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.password_com{
  height: 900px;
  font-size: 0.166667rem;
}
#login_box {
  width: 4.6875rem;
  padding: 0.208333rem;
  color: #01148c;
  border: 1px solid #007cdc;
  border-radius: 0.052083rem;
  position: relative;
  left: 50%;
  transform: translate(-50%, 150px);
  box-shadow: 0 0 0.052083rem #007cdc;
  h4{
      font-size: 0.3125rem;
      margin-bottom: 0.208333rem;
  }
  .btn{
    display: flex;
  }
}
</style>
