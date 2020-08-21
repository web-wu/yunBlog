<template>
    <div class="grgister_con">
      <div id="login_box">
        <h3>欢迎加入云博客</h3>
        <el-form :model="loginForm" :rules="vaildRule" ref="login_form" label-width="80px">
          <el-form-item prop="username" label="用户名">
            <el-input placeholder="请输入用户名" v-model.trim="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input type="password" placeholder="请输入密码" v-model.trim="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item prop="checkpassword" label="确认密码">
            <el-input type="password" placeholder="请确认密码" v-model.trim="loginForm.checkpassword"></el-input>
          </el-form-item>
          <el-form-item prop="email" label="邮箱">
            <el-input placeholder="请输入邮箱" v-model.trim="loginForm.email"></el-input>
          </el-form-item>
          <el-form-item label="角色">
            <el-input readonly v-model="loginForm.role"></el-input>
            <input type="text" v-model="loginForm.status" hidden>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input placeholder="请输入验证码"></el-input>
          </el-form-item>
          <div id="btss">
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.loginForm.checkpassword !== '') {
          this.$refs.login_form.validateField('checkpassword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.loginForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        email: '',
        role: 'normal',
        status: '1',
        password: '',
        checkpassword: ''
      },
      vaildRule: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符之间', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', required: true, message: '请输入正确的邮箱地址', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 8, message: '长度在 6 到 8 个字符之间', trigger: 'blur' },
          { validator: validatePass, trigger: 'blur' }
        ],
        checkpassword: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    signIn () {
      this.$refs.login_form.validate(valid => {
        if (!valid) {
          this.$message({
            message: '信息有误，请确认后再提交！',
            type: 'error'
          })
          return false
        }
        this.$message({
          message: '恭喜，注册成功！',
          type: 'success'
        })
        this.$router.push('/login')
      })
    },
    resetData () {
      this.$refs.login_form.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.grgister_con{
  height: 900px;
  font-size: 0.166667rem;
}
#login_box {
  width: 4.6875rem;
  padding: 0.208333rem 0 0.208333rem 0.104167rem;
  color: #01148c;
  border: 1px solid #007cdc;
  border-radius: 0.052083rem;
  position: relative;
  left: 50%;
  transform: translate(-50%, 100px);
  box-shadow: 0 0 0.052083rem #007cdc;
  h3{
      text-align: center;
      margin-bottom: 0.208333rem;
      font-size: 0.3125rem;
  }
  .el-input{
    width: 3.125rem;
    margin-right: 0.416667rem;
  }
  #btss{
    display: flex;
    font-size: 0.166667rem;
    .el-button{
      margin-left: 0.833333rem;
    }
  }
}
</style>
