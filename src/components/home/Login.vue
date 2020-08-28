<template>
    <div class="con">
      <div id="login_box">
      <h3>云博客</h3>
        <el-form :model="loginForm" :rules="vaildRule" ref="login_form">
          <el-form-item prop="email">
            <el-input placeholder="请输入邮箱" v-model.trim="loginForm.email" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="请输入密码" v-model.trim="loginForm.password" show-password prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
         <div id="btns">
            <div class="btnns">
               <el-button type="success" @click.prevent="signIn">登录</el-button>
            <el-button type="info" @click.prevent="resetData">重置</el-button>
            </div>
            <div class="btnns">
            <el-button type="primary" id="signUp" @click.prevent="signUp">注册</el-button>
            </div>
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
        password: ''
      },
      vaildRule: {
        email: [
          { type: 'email', required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 8, message: '长度在 6 到 8 个字符之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    signIn () {
      this.$refs.login_form.validate(async valid => {
        if (!valid) {
          this.$message.error('邮箱或密码错误!')
          return false
        }
        const data = await this.$store.dispatch('login_sign_async', this.loginForm)
        if (data.status === 1) {
          this.$message.success('登录成功!')
          this.$router.push('/admin')
        } else {
          this.$message.error('邮箱或密码错误!')
          return false
        }
      })
    },
    resetData () {
      this.$refs.login_form.resetFields()
    },
    signUp () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="less" scoped>
.con{
  min-height: 900px;
}
#login_box {
  width: 4.6875rem;
  height: 3.125rem;
  padding: 0.208333rem;
  border: 1px solid #007cdc;
  border-radius: 0.052083rem;
  position: relative;
  left: 50%;
  transform: translate(-50%, 150px);
  box-shadow: 0 0 5px #007cdc;
  h3{
      font-size: 0.3125rem;
      color: #01148c;
      text-align: center;
      margin-bottom: 0.208333rem;
  }
  #btns{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .el-button{
      font-size: 0.166667rem;
    }
    .btnns{
      display: flex;
    }
  }
}
</style>
